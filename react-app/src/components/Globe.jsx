import React, { useRef, useEffect } from "react";
import * as THREE from "three";
export default function Globe() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let controls;

    const run = async () => {
      try {
        const scene = new THREE.Scene();
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        mount.appendChild(renderer.domElement);

        const camera = new THREE.PerspectiveCamera(
          45,
          mount.clientWidth / mount.clientHeight,
          0.1,
          1000
        );
        camera.position.set(0, 0, 4);

        const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.7);
        scene.add(hemi);

        const dir = new THREE.DirectionalLight(0xffffff, 0.6);
        dir.position.set(5, 3, 5);
        scene.add(dir);

        // Earth geometry (kept very dark/transparent so the neural network stands out)
        const geometry = new THREE.SphereGeometry(1.2, 64, 64);
        const material = new THREE.MeshStandardMaterial({
          color: 0x06121a,
          roughness: 1,
          metalness: 0,
          transparent: true,
          opacity: 0.06,
        });

        const earth = new THREE.Mesh(geometry, material);
        scene.add(earth);

        // Clouds are not used for the neural look; keep a very faint atmosphere if needed
        const cloudGeo = new THREE.SphereGeometry(1.21, 64, 64);
        const cloudMat = new THREE.MeshStandardMaterial({
          transparent: true,
          opacity: 0.03,
          depthWrite: false,
        });
        const clouds = new THREE.Mesh(cloudGeo, cloudMat);
        scene.add(clouds);

        // --- Neural network overlay (nodes + connecting lines) ---
        const createNetwork = (count = 88, radius = 1.25, neigh = 3) => {
          // generate evenly distributed points on sphere (Fibonacci sphere)
          const positions = [];
          for (let i = 0; i < count; i++) {
            const t = i / count;
            const inclination = Math.acos(1 - 2 * t);
            const azimuth = Math.PI * (1 + Math.sqrt(5)) * i;
            const x = Math.sin(inclination) * Math.cos(azimuth);
            const y = Math.sin(inclination) * Math.sin(azimuth);
            const z = Math.cos(inclination);
            positions.push(new THREE.Vector3(x * radius, y * radius, z * radius));
          }

          // Points (glowing nodes) - slightly larger for visibility
          const nodesGeom = new THREE.BufferGeometry().setFromPoints(positions);
          const baseNodeSize = 0.04 * radius;
          const nodesMaterial = new THREE.PointsMaterial({
            color: 0x66f0ff,
            size: baseNodeSize,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.95,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
          });
          const nodes = new THREE.Points(nodesGeom, nodesMaterial);
          scene.add(nodes);

          // Lines between nearest neighbors
          // compute k nearest neighbors (simple quadratic search)
          const segments = [];
          for (let i = 0; i < positions.length; i++) {
            // compute distances
            const distances = [];
            for (let j = 0; j < positions.length; j++) {
              if (i === j) continue;
              distances.push({ idx: j, dist: positions[i].distanceToSquared(positions[j]) });
            }
            distances.sort((a, b) => a.dist - b.dist);
            for (let k = 0; k < Math.min(neigh, distances.length); k++) {
              const other = positions[distances[k].idx];
              segments.push(positions[i].x, positions[i].y, positions[i].z);
              segments.push(other.x, other.y, other.z);
            }
          }

          const linesGeom = new THREE.BufferGeometry();
          linesGeom.setAttribute('position', new THREE.Float32BufferAttribute(segments, 3));
          const linesMaterial = new THREE.LineBasicMaterial({
            color: 0x66f0ff,
            transparent: true,
            opacity: 0.42,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
          });
          const lines = new THREE.LineSegments(linesGeom, linesMaterial);
          scene.add(lines);

          return { nodes, nodesGeom, nodesMaterial, baseNodeSize, lines, linesGeom, linesMaterial };
        };

        const network = createNetwork(108, 1.25, 3);

        // Dynamically import OrbitControls to avoid bundler/import-time failures
        const oc = await import("three/examples/jsm/controls/OrbitControls");
        const OrbitControls = oc.OrbitControls;
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.4;
        controls.minPolarAngle = 0.1;
        controls.maxPolarAngle = Math.PI - 0.1;

        let frameId;

        const onResize = () => {
          if (!mount) return;
          const width = mount.clientWidth;
          const height = mount.clientHeight;
          renderer.setSize(width, height);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        };

        window.addEventListener("resize", onResize);

        const animate = () => {
          controls.update();
          // slow self-rotation
          earth.rotation.y += 0.0012;
          clouds.rotation.y += 0.0015;
          // subtle network motion
          if (network && network.lines) network.lines.rotation.y += 0.0008;
          if (network && network.nodes) network.nodes.rotation.y += 0.0009;

          // pulsing nodes (global pulse) - smoother using time
          const t = performance.now() * 0.001;
          if (network && network.nodesMaterial) {
            const pulseSpeed = 1.6; // Hz
            const pulseScale = 0.45; // amplitude
            network.nodesMaterial.size = network.baseNodeSize * (1 + Math.sin(t * pulseSpeed) * pulseScale);
            network.nodesMaterial.needsUpdate = true;
          }
          renderer.render(scene, camera);
          frameId = requestAnimationFrame(animate);
        };

        animate();

        // cleanup function
        return () => {
          cancelAnimationFrame(frameId);
          window.removeEventListener("resize", onResize);
          if (controls) controls.dispose();
          geometry.dispose();
          cloudGeo.dispose();
          material.dispose();
          cloudMat.dispose();
          // dispose network geometries/materials
          try {
            if (network) {
              if (network.nodes) scene.remove(network.nodes);
              if (network.lines) scene.remove(network.lines);
              if (network.nodesGeom) network.nodesGeom.dispose();
              if (network.nodesMaterial) network.nodesMaterial.dispose();
              if (network.linesGeom) network.linesGeom.dispose();
              if (network.linesMaterial) network.linesMaterial.dispose();
            }
          } catch (e) {}

          renderer.dispose();
          if (renderer.domElement && mount.contains(renderer.domElement)) {
            mount.removeChild(renderer.domElement);
          }
        };
      } catch (err) {
        console.error("Error initializing Globe:", err);
      }
    };

    const cleanupPromise = run();

    return () => {
      // If run returned a cleanup function (via promise), ensure it's called when resolved
      cleanupPromise.then((cleanup) => {
        if (typeof cleanup === "function") cleanup();
      }).catch((e) => {
        // already handled
      });
    };
    
  }, []);

  return <div className="globe-container" ref={mountRef} aria-hidden="true" />;
}
