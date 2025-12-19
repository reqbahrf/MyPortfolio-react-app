import { useEffect, useRef } from 'react';
import { useThemeContext } from './context/ThemeContext';

export default function FallingStars() {
  const { isDarkTheme } = useThemeContext();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d');

    let animationFrameId: number;
    let stars: Array<Star> = [];

    // Configuration
    const STAR_COUNT = 30; // Number of stars
    const SPEED_BASE = 0.6; // Base speed
    const LENGTH_BASE = 15; // Length of the star trail

    const MIN_WAIT = 5000;
    const MAX_WAIT = 15000;

    const backgroundColor = isDarkTheme ? '#000000' : '#ffffff';
    const starColor = isDarkTheme ? '255, 255, 255' : '0, 0, 0';

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
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
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.speed = Math.random() * 2 + SPEED_BASE;
        this.len = Math.random() * 20 + LENGTH_BASE;

        this.baseOpacity = Math.random() * 0.5 + 0.1;
        this.twinkleSpeed = Math.random() * 0.05 + 0.02;
        this.twinklePhase = Math.random() * Math.PI * 2;

        this.waitDuration = Math.random() * (MAX_WAIT - MIN_WAIT) + MIN_WAIT;
        this.spawnTime = Date.now();
        this.state = 'idle';
      }

      update() {
        const now = Date.now();

        if (this.state === 'idle') {
          if (now - this.spawnTime > this.waitDuration) {
            this.state = 'falling';
          }

          this.opacity =
            this.baseOpacity + Math.sin(now * 0.005 + this.twinklePhase) * 0.2;

          if (this.opacity < 0) this.opacity = 0;
          if (this.opacity > 1) this.opacity = 1;
        } else if (this.state === 'falling') {
          this.x -= this.speed;
          this.y += this.speed;

          this.opacity = 1;

          if (this.x < -this.len || this.y > canvas.height + this.len) {
            this.reset();
          }
        }
      }

      draw() {
        if (!ctx) return;

        if (this.state === 'idle') {
          ctx.fillStyle = `rgba(${starColor}, ${this.opacity})`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        } else {
          const startX = this.x;
          const startY = this.y;
          const endX = this.x + this.len;
          const endY = this.y - this.len;

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
        }
      }
    }

    const initStars = () => {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push(new Star());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    handleResize();
    window.addEventListener('resize', handleResize);
    animate();
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkTheme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100dvw',
        height: '100dvh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
