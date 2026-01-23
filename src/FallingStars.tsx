import { useEffect, useRef } from 'react';
import { useThemeContext } from './context/ThemeContext';

export default function FallingStars() {
  const { isDarkTheme } = useThemeContext();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animation State Refs
  const previousTimeRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const hasWarpedRef = useRef<boolean>(false);

  const starColor = isDarkTheme ? '255, 255, 255' : '0, 0, 0';

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d', { alpha: true })!;

    let animationFrameId: number;
    let normalStars: Array<Star> = [];
    let warpStars: Array<WarpStar> = [];

    // --- TIMELINE CONFIGURATION ---
    const INITIAL_PAUSE = 1500; // 1.5s pause (drifting)
    const WARP_DURATION = 5500; // 5.5s travel time
    const FADE_DURATION = 1500; // 1.5s transition to falling stars

    // Explicit Timeline Markers
    const T_START = 0;
    const T_WARP_START = T_START + INITIAL_PAUSE;
    const T_WARP_END = T_WARP_START + WARP_DURATION;
    const T_NORMAL = T_WARP_END + FADE_DURATION;

    const shouldWarp = !hasWarpedRef.current;

    // --- CONFIGS ---
    const NORMAL_STAR_COUNT = 30;
    const WARP_STAR_COUNT = 300; // Dense field for warp

    // Normal Falling Star Config
    const SPEED_BASE = 0.6;
    const LENGTH_BASE = 15;
    const MIN_WAIT = 8000;
    const MAX_WAIT = 20000;
    const MIN_FLARE_SIZE = 5;
    const MAX_FLARE_SIZE = 10;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx?.scale(dpr, dpr);
    };

    // -------------------------------------------------------------------------
    // 1. WARP STAR (3D Perspective)
    // -------------------------------------------------------------------------
    class WarpStar {
      x: number;
      y: number;
      z: number;
      prevZ: number;

      constructor() {
        // Random 3D coordinate
        this.x =
          Math.random() * window.innerWidth * 3 - window.innerWidth * 1.5;
        this.y =
          Math.random() * window.innerHeight * 3 - window.innerHeight * 1.5;
        this.z = Math.random() * 2000;
        this.prevZ = this.z;
      }

      update(speed: number) {
        this.prevZ = this.z;
        this.z -= speed;

        // Cycle stars back to far distance if they pass camera
        if (this.z < 1) {
          this.z = 2000;
          this.prevZ = 2000;
          this.x =
            Math.random() * window.innerWidth * 3 - window.innerWidth * 1.5;
          this.y =
            Math.random() * window.innerHeight * 3 - window.innerHeight * 1.5;
        }
      }

      draw(cx: number, cy: number, globalOpacity: number) {
        if (this.z <= 0) return;

        // Project 3D to 2D
        const x2d = (this.x / this.z) * window.innerWidth + cx;
        const y2d = (this.y / this.z) * window.innerHeight + cy;

        // Tail position
        const px2d = (this.x / this.prevZ) * window.innerWidth + cx;
        const py2d = (this.y / this.prevZ) * window.innerHeight + cy;

        // Opacity checks
        let opacity = (1 - this.z / 2000) * globalOpacity;
        if (opacity < 0) opacity = 0;

        ctx.strokeStyle = `rgba(${starColor}, ${opacity})`;
        ctx.lineWidth = 2 * (1 - this.z / 2000) + 0.5;
        ctx.beginPath();
        ctx.moveTo(px2d, py2d);
        ctx.lineTo(x2d, y2d);
        ctx.stroke();
      }
    }

    // -------------------------------------------------------------------------
    // 2. NORMAL FALLING STAR
    // -------------------------------------------------------------------------
    class Star {
      public speed: number = 0;
      public len: number = 0;
      public x: number = 0;
      public y: number = 0;
      public state: 'idle' | 'falling' = 'idle';
      public opacity: number = 0;
      public baseOpacity: number = 0;
      public twinkleSpeed: number = 0;
      public twinklePhase: number = 0;
      public waitDuration: number = 0;
      public spawnTime: number = 0;
      public flareSize: number = 0;
      constructor() {
        this.reset();
        this.spawnTime = performance.now() - Math.random() * 10000;
      }

      reset() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.speed = Math.random() * 2 + SPEED_BASE;
        this.len = Math.random() * 20 + LENGTH_BASE;
        this.baseOpacity = Math.random() * 0.5 + 0.1;
        this.twinkleSpeed = Math.random() * 0.05 + 0.02;
        this.twinklePhase = Math.random() * Math.PI * 2;
        this.waitDuration = Math.random() * (MAX_WAIT - MIN_WAIT) + MIN_WAIT;
        this.spawnTime = performance.now();
        this.state = 'idle';
        this.flareSize =
          Math.random() * (MAX_FLARE_SIZE - MIN_FLARE_SIZE) + MIN_FLARE_SIZE;
      }

      update(now: number, dt: number) {
        if (this.state === 'idle') {
          if (now - this.spawnTime > this.waitDuration) {
            this.state = 'falling';
            this.opacity = 1;
          } else {
            this.opacity =
              this.baseOpacity +
              Math.sin(now * 0.005 + this.twinklePhase) * 0.2;
            if (this.opacity < 0) this.opacity = 0;
            if (this.opacity > 1) this.opacity = 1;
          }
        } else {
          this.x -= this.speed * dt;
          this.y += this.speed * dt;
          if (this.x < -this.len || this.y > window.innerHeight + this.len) {
            this.reset();
          }
        }
      }
    }

    // Helper for drawing idle stars
    const drawIdleStar = (star: Star) => {
      if (star.opacity <= 0) return;
      const size = star.flareSize * (0.5 + star.opacity * 0.5);

      const glow = ctx.createRadialGradient(
        star.x,
        star.y,
        0,
        star.x,
        star.y,
        size,
      );
      glow.addColorStop(0, `rgba(${starColor}, ${star.opacity})`);
      glow.addColorStop(0.5, `rgba(${starColor}, ${star.opacity * 0.3})`);
      glow.addColorStop(1, `rgba(${starColor}, 0)`);

      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
      ctx.fill();

      if (star.opacity > 0.3) {
        const spikeLen = size * 1.5;
        const thickness = 0.5;

        ctx.fillStyle = `rgba(${starColor}, ${star.opacity * 0.8})`;
        ctx.beginPath();
        ctx.moveTo(star.x - spikeLen, star.y);
        ctx.lineTo(star.x + spikeLen, star.y);
        ctx.moveTo(star.x, star.y - spikeLen);
        ctx.lineTo(star.x, star.y + spikeLen);
        ctx.strokeStyle = `rgba(${starColor}, ${star.opacity * 0.6})`;
        ctx.lineWidth = thickness;
        ctx.stroke();
      }
    };

    const drawFallingStar = (star: Star) => {
      const startX = star.x;
      const startY = star.y;
      const endX = star.x + star.len;
      const endY = star.y - star.len;

      // 1. Draw the Tail (Gradient Line)
      const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
      gradient.addColorStop(0, `rgba(${starColor}, 1)`);
      gradient.addColorStop(1, `rgba(${starColor}, 0)`);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.5;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      const headGlow = ctx.createRadialGradient(
        startX,
        startY,
        0,
        startX,
        startY,
        4,
      );
      headGlow.addColorStop(0, `rgba(${starColor}, 1)`);
      headGlow.addColorStop(1, `rgba(${starColor}, 0)`);

      ctx.fillStyle = headGlow;
      ctx.beginPath();
      ctx.arc(startX, startY, 4, 0, Math.PI * 2);
      ctx.fill();
    };

    const initArrays = () => {
      normalStars = [];
      warpStars = [];
      for (let i = 0; i < NORMAL_STAR_COUNT; i++) normalStars.push(new Star());
      for (let i = 0; i < WARP_STAR_COUNT; i++) warpStars.push(new WarpStar());
    };

    // -------------------------------------------------------------------------
    // ANIMATION LOOP
    // -------------------------------------------------------------------------
    const animate = (time: number) => {
      if (!previousTimeRef.current) previousTimeRef.current = time;
      if (startTimeRef.current === null) startTimeRef.current = time;

      const deltaTime = time - previousTimeRef.current;
      let fpsCorrection = deltaTime / 16.67;
      if (fpsCorrection > 2) fpsCorrection = 1;
      previousTimeRef.current = time;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const idleStars: Star[] = [];
      const fallingStars: Star[] = [];

      // Current exact time in timeline
      const elapsed = time - startTimeRef.current;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      // --- PHASE 1: PAUSE (Drifting stars) ---
      if (shouldWarp && elapsed >= T_START && elapsed < T_WARP_START) {
        // Just drift slowly
        const driftSpeed = 0.5 * fpsCorrection;
        warpStars.forEach((star) => {
          star.update(driftSpeed);
          star.draw(cx, cy, 1);
        });
      }

      // --- PHASE 2: WARP (Accelerate) ---
      else if (shouldWarp && elapsed >= T_WARP_START && elapsed < T_WARP_END) {
        const warpProgress = (elapsed - T_WARP_START) / WARP_DURATION; // 0 to 1

        // Exponential ease-in for that "punch it" feel
        const ease = Math.pow(warpProgress, 3);
        const speed = (2 + ease * 150) * fpsCorrection; // Start at 2, ramp to 150

        warpStars.forEach((star) => {
          star.update(speed);
          // Fade out slightly at max speed so it's not just white noise
          star.draw(cx, cy, 1);
        });
      }

      // --- PHASE 3: ARRIVAL (Decelerate & Fade Out) ---
      else if (shouldWarp && elapsed >= T_WARP_END && elapsed < T_NORMAL) {
        const arrivalProgress = (elapsed - T_WARP_END) / FADE_DURATION; // 0 to 1

        // 1. START GLOBAL TRANSFORM (Required for Shake)
        ctx.save();

        // --- SHAKE LOGIC ---
        // Only shake during the initial impact (first 20% of arrival)
        if (arrivalProgress < 0.2) {
          // Calculate intensity: starts strong, fades to 0
          const shakeIntensity = 20 * (1 - arrivalProgress / 0.2);
          const dx = (Math.random() - 0.9) * shakeIntensity;
          const dy = (Math.random() - 0.9) * shakeIntensity;
          ctx.translate(dx, dy); // Move the entire canvas view
        }

        // --- DRAW STARS (Warp & Normal) ---

        // Warp Stars (Slowing down)
        const decel = 1 - Math.pow(arrivalProgress, 0.5);
        const warpSpeed = decel * 150 * fpsCorrection;

        warpStars.forEach((star) => {
          star.update(warpSpeed);
          star.draw(cx, cy, 1 - arrivalProgress);
        });

        // Normal Stars (Fading In)
        ctx.save();
        ctx.globalAlpha = arrivalProgress;
        normalStars.forEach((star) => {
          star.update(time, fpsCorrection);
          if (star.state === 'idle') drawIdleStar(star);
        });
        ctx.restore();

        // 2. END GLOBAL TRANSFORM (Stop Shaking)
        ctx.restore();
      }

      // --- PHASE 4: NORMAL ---
      else {
        if (shouldWarp && !hasWarpedRef.current) {
          hasWarpedRef.current = true;
        }

        normalStars.forEach((star) => {
          star.update(time, fpsCorrection);
          if (star.state === 'idle') idleStars.push(star);
          else fallingStars.push(star);
        });

        idleStars.forEach((star) => {
          drawIdleStar(star);
        });

        fallingStars.forEach((star) => {
          drawFallingStar(star);
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    handleResize();
    initArrays();

    window.addEventListener('resize', handleResize);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkTheme, starColor]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        backgroundColor: isDarkTheme
          ? 'var(--color-obsidian)'
          : 'var(--color-bone)',
        transition: 'background-color 0.3s ease',
      }}
    />
  );
}
