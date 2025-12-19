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
      public opacity: number;
      public x: number;
      public y: number;
      constructor() {
        this.speed = 0;
        this.len = 0;
        this.opacity = 0;
        this.y = 0;
        this.x = 0;
        this.reset(true);
      }

      reset(initial = false) {
        const w = canvas.width;
        const h = canvas.height;

        // Randomize speed and length for variety
        this.speed = Math.random() * 2 + SPEED_BASE;
        this.len = Math.random() * 20 + LENGTH_BASE;
        this.opacity = Math.random() * 0.5 + 0.2;

        if (initial) {
          // Spawn randomly anywhere on screen initially
          this.x = w;
          this.y = h;
        } else {
          // Logic to spawn from Top or Right side only
          // This creates the continuous flow from Upper-Right
          const spawnSide = Math.random() > 0.5 ? 'top' : 'right';

          if (spawnSide === 'top') {
            // Spawn above the canvas
            this.x = Math.random() * w * 1.5; // * 1.5 to cover the corner
            this.y = -this.len;
          } else {
            // Spawn to the right of the canvas
            this.x = w + this.len;
            this.y = Math.random() * h;
          }
        }
      }

      update() {
        // Move diagonally: Upper Right -> Lower Left
        this.x -= this.speed;
        this.y += this.speed;

        // Reset if goes off screen (Left side or Bottom side)
        if (this.x < -this.len || this.y > canvas.height + this.len) {
          this.reset();
        }
      }

      draw() {
        if (!ctx) return;
        ctx.strokeStyle = starColor;
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        ctx.globalAlpha = this.opacity;

        ctx.beginPath();
        // Start of line
        ctx.moveTo(this.x, this.y);
        // End of line (angled up and right relative to the head to create trail)
        // Since we move (-x, +y), the tail should be at (+x, -y)
        ctx.lineTo(this.x + this.len, this.y - this.len);
        ctx.stroke();
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
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
