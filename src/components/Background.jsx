import React, { useEffect, useRef } from "react";
import "./Background.css"; 
export default function NetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");

    const options = {
      num: 80,
      particle: {
        color: "rgba(142, 214, 255, 0.8)",
        szMin: 0.7,
        szMax: 1.5,
        spMin: 0.06,
        spMax: 0.6,
      },
      link: {
        color: "rgba(96, 165, 250, 0.28)",
        maxDist: 170,
      },
    };

    const pi2 = Math.PI * 2;
    const degrad = Math.PI / 180;

    let w = (c.width = window.innerWidth);
    let h = (c.height = window.innerHeight);

    class Particle {
      constructor() {
        this.p = {
          x: Math.random() * c.width,
          y: Math.random() * c.height,
        };
        this.s = options.particle.spMin + Math.random() * options.particle.spMax;
        this.r = options.particle.szMin + Math.random() * options.particle.szMax;
        this.d = Math.random() * pi2;
        this.v = {
          x: Math.cos(this.d) * this.s,
          y: Math.sin(this.d) * this.s,
        };
      }
      setDir(d) {
        this.d = d;
        this.v.x = Math.cos(this.d) * this.s;
        this.v.y = Math.sin(this.d) * this.s;
      }
      wrap() {
        if (
          this.p.x < 0 ||
          this.p.x > w ||
          this.p.y < 0 ||
          this.p.y > h
        )
          this.setDir(this.d + Math.random() * degrad * 5);

        if (this.p.x < 0) this.p.x += w;
        if (this.p.x > w) this.p.x -= w;
        if (this.p.y < 0) this.p.y += h;
        if (this.p.y > h) this.p.y -= h;
      }
      update() {
        this.p.x += this.v.x;
        this.p.y += this.v.y;
        this.wrap();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.p.x, this.p.y, this.r, 0, pi2);
        ctx.fillStyle = options.particle.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "rgba(96, 165, 250, 0.7)";
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      drawLink(other) {
        ctx.save();
        ctx.globalAlpha =
          1 - this.distanceTo(other) / options.link.maxDist;
        ctx.beginPath();
        ctx.moveTo(this.p.x, this.p.y);
        ctx.lineWidth = this.r;
        ctx.lineTo(other.p.x, other.p.y);
        ctx.strokeStyle = options.link.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(96, 165, 250, 0.5)";
        ctx.stroke();
        ctx.restore();
      }
      closeTo(other) {
        let xd = other.p.x - this.p.x;
        let yd = other.p.y - this.p.y;
        return (
          xd * xd + yd * yd <=
          options.link.maxDist * options.link.maxDist
        );
      }
      distanceTo(other) {
        let xd = other.p.x - this.p.x;
        let yd = other.p.y - this.p.y;
        return Math.sqrt(xd * xd + yd * yd);
      }
    }

    const particles = [...Array(options.num)].map(() => new Particle());

    const resize = () => {
      let s = {
        x: window.innerWidth / w,
        y: window.innerHeight / h,
      };
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;
      particles.forEach((particle) => {
        particle.p.x *= s.x;
        particle.p.y *= s.y;
      });
    };

    const integrate = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((a) => {
        a.update();
        a.draw();
        particles.forEach((b) => {
          if (a === b || !b.closeTo(a)) return;
          a.drawLink(b);
        });
      });
      requestAnimationFrame(integrate);
    };

    resize();
    window.addEventListener("resize", resize);
    integrate();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <div className="background-overlay" />
      <canvas
        ref={canvasRef}
        className="background-canvas-container"
        style={{
          display: "block",
          zIndex: -1,
          touchAction: 'none'
        }}
      />
    </>
  );
}
