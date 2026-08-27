import React, { useEffect, useRef } from "react";

export default function NameParticles({ name = "KANISHKAA" }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null, radius: 90 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let particles = [];

    // Set canvas dimensions based on container width
    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width || 500;
      canvas.height = 300; // Fixed height for alignment
      initParticles();
    };

    class Particle {
      constructor(x, y) {
        // Start close to the glyph so the name resolves within the intro window.
        this.x = x + (Math.random() - 0.5) * 140;
        this.y = y + (Math.random() - 0.5) * 140;
        this.baseX = x;
        this.baseY = y;
        this.vx = 0;
        this.vy = 0;
        this.size = 2;
        this.color = "rgba(0, 234, 255, 0.85)";
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 4;
        ctx.shadowColor = "rgba(0, 234, 255, 0.6)";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      update() {
        // Distance from mouse
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRef.current.radius) {
          const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
          // Calculate push direction
          const angle = Math.atan2(dy, dx);
          const forceDirectionX = Math.cos(angle);
          const forceDirectionY = Math.sin(angle);
          
          // Push away
          this.vx -= forceDirectionX * force * 4;
          this.vy -= forceDirectionY * force * 4;
        } else {
          // Return to home position
          const dxBase = this.baseX - this.x;
          const dyBase = this.baseY - this.y;
          this.vx += dxBase * 0.16;
          this.vy += dyBase * 0.16;
        }

        // Friction / air resistance
        this.vx *= 0.78;
        this.vy *= 0.78;

        this.x += this.vx;
        this.y += this.vy;
      }
    }

    const initParticles = () => {
      particles = [];
      const w = canvas.width;
      const h = canvas.height;

      // Offscreen canvas to render text and scan pixels
      const offscreen = document.createElement("canvas");
      const offCtx = offscreen.getContext("2d");
      offscreen.width = w;
      offscreen.height = h;

      // Scale font based on canvas width to ensure readability
      const fontSize = Math.min(w / (name.length * 0.58), 90);
      offCtx.font = `800 ${fontSize}px Outfit, sans-serif`;
      offCtx.fillStyle = "#ffffff";
      offCtx.textAlign = "center";
      offCtx.textBaseline = "middle";
      offCtx.fillText(name, w / 2, h / 2);

      const imgData = offCtx.getImageData(0, 0, w, h).data;

      // Sample pixels with a step based on screen size (denser on bigger screens)
      const step = w > 600 ? 5 : 4;

      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          const index = (y * w + x) * 4;
          const alpha = imgData[index + 3];
          if (alpha > 128) {
            particles.push(new Particle(x, y));
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    // Event listeners for mouse interaction
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current.x = e.touches[0].clientX - rect.left;
        mouseRef.current.y = e.touches[0].clientY - rect.top;
      }
    };

    const handleTouchEnd = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("touchmove", handleTouchMove);
    canvas.addEventListener("touchend", handleTouchEnd);

    // Initial setup
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
        canvas.removeEventListener("touchmove", handleTouchMove);
        canvas.removeEventListener("touchend", handleTouchEnd);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [name]);

  return (
    <div className="name-particles-container" style={{ width: "100%", height: "100%", minHeight: "300px" }}>
      <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
    </div>
  );
}
