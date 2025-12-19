import { useEffect, useRef } from 'react';
import { useThemeContext } from './context/ThemeContext';

export default function FallingStars() {
  const { isDarkTheme } = useThemeContext();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previousTimeRef = useRef<number>(0);

  const starColor = isDarkTheme ? '255, 255, 255' : '0, 0, 0';
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d', { alpha: true })!;

    let animationFrameId: number;
    let stars: Array<Star> = [];

    // Configuration
    const STAR_COUNT = 30; // Number of stars
    const SPEED_BASE = 0.6; // Base speed
    const LENGTH_BASE = 15; // Length of the star trail

    const MIN_WAIT = 5000;
    const MAX_WAIT = 15000;
    const MIN_FLARE_SIZE = 5;
    const MAX_FLARE_SIZE = 10;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx?.scale(dpr, dpr);
    };

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

    const initStars = () => {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push(new Star());
      }
    };

    const animate = (time: number) => {
      if (!previousTimeRef.current) previousTimeRef.current = time;

      const deltaTime = time - previousTimeRef.current;

      let fpsCorrection = deltaTime / 16.67;

      if (fpsCorrection > 2) fpsCorrection = 1;

      previousTimeRef.current = time;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const idleStars: Star[] = [];
      const fallingStars: Star[] = [];

      stars.forEach((star) => {
        star.update(time, fpsCorrection);
        if (star.state === 'idle') idleStars.push(star);
        else fallingStars.push(star);
      });

      ctx.fillStyle = `rgb(${starColor})`;

      idleStars.forEach((star) => {
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      fallingStars.forEach((star) => {
        const startX = star.x;
        const startY = star.y;
        const endX = star.x + star.len;
        const endY = star.y - star.len;

        const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
        gradient.addColorStop(0, `rgba(${starColor}, 1)`);
        gradient.addColorStop(1, `rgba(${starColor}, 0)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        ctx.globalAlpha = 1; // Reset alpha for the streak
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    handleResize();
    initStars();
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
        backgroundColor: isDarkTheme ? '#000000' : '#ffffff',
        transition: 'background-color 0.3s ease',
      }}
    />
  );
}
