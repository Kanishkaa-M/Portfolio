import React, { useEffect, useRef } from "react";

export default function ElectricBorder({
  width = 354,
  height = 504,
  octaves = 10,
  lacunarity = 1.6,
  gain = 0.6,
  amplitude = 0.2,
  frequency = 5,
  baseFlatness = 0.2,
  displacement = 60,
  speed = 1,
  borderOffset = 24,
  borderRadius = 20,
  lineWidth = 1,
  color = "#00ff88",
  style = {},
  className = "",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // resize canvas to parent size for crispness
    const parent = canvas.parentElement || canvas;
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const setSize = () => {
      const rect = parent.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setSize();
    const ro = new ResizeObserver(setSize);
    try {
      ro.observe(parent);
    } catch (e) {}

    let time = 0;
    let lastFrameTime = 0;

    const random = (x) => (Math.sin(x * 12.9898) * 43758.5453) % 1;

    const noise2D = (x, y) => {
      const i = Math.floor(x);
      const j = Math.floor(y);
      const fx = x - i;
      const fy = y - j;

      const a = random(i + j * 57);
      const b = random(i + 1 + j * 57);
      const c = random(i + (j + 1) * 57);
      const d = random(i + 1 + (j + 1) * 57);

      const ux = fx * fx * (3.0 - 2.0 * fx);
      const uy = fy * fy * (3.0 - 2.0 * fy);

      return (
        a * (1 - ux) * (1 - uy) + b * ux * (1 - uy) + c * (1 - ux) * uy + d * ux * uy
      );
    };

    const octavedNoise = (
      x,
      octaves,
      lacunarity,
      gain,
      baseAmplitude,
      baseFrequency,
      time = 0,
      seed = 0,
      baseFlatness = 1.0
    ) => {
      let y = 0;
      let amplitudeLocal = baseAmplitude;
      let frequencyLocal = baseFrequency;

      for (let i = 0; i < octaves; i++) {
        let octaveAmplitude = amplitudeLocal;
        if (i === 0) octaveAmplitude *= baseFlatness;
        y += octaveAmplitude * noise2D(frequencyLocal * x + seed * 100, time * frequencyLocal * 0.3);
        frequencyLocal *= lacunarity;
        amplitudeLocal *= gain;
      }

      return y;
    };

    const getCornerPoint = (centerX, centerY, radius, startAngle, arcLength, progress) => {
      const angle = startAngle + progress * arcLength;
      return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      };
    };

    const getRoundedRectPoint = (t, left, top, widthRect, heightRect, radius) => {
      const straightWidth = widthRect - 2 * radius;
      const straightHeight = heightRect - 2 * radius;
      const cornerArc = (Math.PI * radius) / 2;
      const totalPerimeter = 2 * straightWidth + 2 * straightHeight + 4 * cornerArc;

      const distance = t * totalPerimeter;
      let accumulated = 0;

      if (distance <= accumulated + straightWidth) {
        const progress = (distance - accumulated) / straightWidth;
        return { x: left + radius + progress * straightWidth, y: top };
      }
      accumulated += straightWidth;

      if (distance <= accumulated + cornerArc) {
        const progress = (distance - accumulated) / cornerArc;
        return getCornerPoint(left + widthRect - radius, top + radius, radius, -Math.PI / 2, Math.PI / 2, progress);
      }
      accumulated += cornerArc;

      if (distance <= accumulated + straightHeight) {
        const progress = (distance - accumulated) / straightHeight;
        return { x: left + widthRect, y: top + radius + progress * straightHeight };
      }
      accumulated += straightHeight;

      if (distance <= accumulated + cornerArc) {
        const progress = (distance - accumulated) / cornerArc;
        return getCornerPoint(left + widthRect - radius, top + height - radius, radius, 0, Math.PI / 2, progress);
      }
      accumulated += cornerArc;

      if (distance <= accumulated + straightWidth) {
        const progress = (distance - accumulated) / straightWidth;
        return { x: left + widthRect - radius - progress * straightWidth, y: top + height };
      }
      accumulated += straightWidth;

      if (distance <= accumulated + cornerArc) {
        const progress = (distance - accumulated) / cornerArc;
        return getCornerPoint(left + radius, top + height - radius, radius, Math.PI / 2, Math.PI / 2, progress);
      }
      accumulated += cornerArc;

      if (distance <= accumulated + straightHeight) {
        const progress = (distance - accumulated) / straightHeight;
        return { x: left, y: top + height - radius - progress * straightHeight };
      }
      accumulated += straightHeight;

      const progress = (distance - accumulated) / cornerArc;
      return getCornerPoint(left + radius, top + radius, radius, Math.PI, Math.PI / 2, progress);
    };

    let animationId = null;

    const draw = (currentTime = 0) => {
      const deltaTime = (currentTime - lastFrameTime) / 1000;
      time += deltaTime * speed;
      lastFrameTime = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      const scale = displacement;

      const left = borderOffset;
      const top = borderOffset;
      const borderWidth = canvas.width - 2 * borderOffset;
      const borderHeight = canvas.height - 2 * borderOffset;
      const radius = borderRadius;

      const approxPerimeter = 2 * (borderWidth + borderHeight) + 2 * Math.PI * radius;
      const sampleCount = Math.max(32, Math.floor(approxPerimeter / 2));

      ctx.beginPath();
      for (let i = 0; i <= sampleCount; i++) {
        const progress = i / sampleCount;
        const point = getRoundedRectPoint(progress, left, top, borderWidth, borderHeight, radius);

        const xNoise = octavedNoise(progress * 8, octaves, lacunarity, gain, amplitude, frequency, time, 0, baseFlatness);
        const yNoise = octavedNoise(progress * 8, octaves, lacunarity, gain, amplitude, frequency, time, 1, baseFlatness);

        const displacedX = point.x + xNoise * scale;
        const displacedY = point.y + yNoise * scale;

        if (i === 0) ctx.moveTo(displacedX, displacedY);
        else ctx.lineTo(displacedX, displacedY);
      }
      ctx.closePath();
      ctx.stroke();

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      try {
        ro.disconnect();
      } catch (e) {}
    };
  }, [width, height, octaves, lacunarity, gain, amplitude, frequency, baseFlatness, displacement, speed, borderOffset, borderRadius, lineWidth, color]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", ...style }}
    />
  );
}
