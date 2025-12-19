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
    const starColor = isDarkTheme ? '#ffffff' : '#000000';

    // Helper to resize canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars(); // Re-initialize stars to fill the new screen size immediately
    };

    class Star {
      public speed: number;
      public len: number;
      public x: number;
      public y: number;
      public state: 'idle' | 'falling';
      public opacity: number;
      public baseOpacity: number;
      public twinkleSpeed: number;
      public twinklePhase: number;
      public waitDuration: number;
      public spawnTime: number;
      constructor() {
        this.speed = 0;
        this.len = 0;
        this.opacity = 0;
        this.baseOpacity = 0;
        this.y = 0;
        this.x = 0;
        this.state = 'idle';
        this.twinklePhase = 0;
        this.twinkleSpeed = 0;
        this.waitDuration = 0;
        this.spawnTime = 0;
        this.reset();
      }

      reset() {
        this.state = 'idle';
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        // Randomize speed and length for variety
        this.speed = Math.random() * 2 + SPEED_BASE;
        this.len = Math.random() * 20 + LENGTH_BASE;

        this.baseOpacity = Math.random() * 0.5 + 0.1;
        this.twinkleSpeed = Math.random() * 0.05 + 0.02; // How fast it pulses
        this.twinklePhase = Math.random() * Math.PI * 2; // Random starting point in sine wave

        this.waitDuration = Math.random() * (MAX_WAIT - MIN_WAIT) + MIN_WAIT;
        this.spawnTime = Date.now();
      }

      update() {
        const now = Date.now();

        if (this.state === 'idle') {
          // CHECK: Has the wait time passed?
          if (now - this.spawnTime > this.waitDuration) {
            this.state = 'falling';
          }

          // ANIMATION: Twinkle (Sine wave based on time)
          // Creates a smooth pulsing effect
          this.opacity =
            this.baseOpacity + Math.sin(now * 0.005 + this.twinklePhase) * 0.2;

          // Clamp opacity between 0 and 1
          if (this.opacity < 0) this.opacity = 0;
          if (this.opacity > 1) this.opacity = 1;
        } else if (this.state === 'falling') {
          // MOVEMENT: Diagonal Upper Right -> Lower Left
          this.x -= this.speed;
          this.y += this.speed;

          // Increase opacity for the "shooting" effect
          this.opacity = 1;

          // RESET: If off-screen (left or bottom)
          if (this.x < -this.len || this.y > canvas.height + this.len) {
            this.reset();
          }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = starColor;
        ctx.strokeStyle = starColor;
        ctx.globalAlpha = this.opacity;

        if (this.state === 'idle') {
          // DRAW: A simple dot for stationary stars
          ctx.beginPath();
          ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // DRAW: A streak for falling stars
          ctx.lineWidth = 1.5;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          // Tail is opposite to movement (-x, +y movement -> +x, -y tail)
          ctx.lineTo(this.x + this.len, this.y - this.len);
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

      // 2. Update and Draw every star
      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      // 3. Loop
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    handleResize();
    window.addEventListener('resize', handleResize);
    animate();

    console.log('Stars', stars);
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
