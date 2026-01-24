import { useEffect, useRef } from 'react';
import { motion, cubicBezier } from 'motion/react';
import { useWarp } from '../context/WarpContext';

const linearEase = cubicBezier(0, 0, 1, 1);
const easeOut = cubicBezier(0.2, 0, 0, 1);

const variants = {
  idle: {
    scale: 1,
    x: 0,
    y: 0,
    filter: 'blur(0px)',
  },

  warp: {
    scale: 1.12,
    filter: 'blur(2px)',
    transition: {
      duration: 5.5,
      ease: linearEase,
    },
  },

  arrival: {
    scale: [1.12, 0.96, 1],
    x: [40, -10, 0],
    y: [15, -5, 0],
    transition: {
      duration: 0.35,
      ease: easeOut, // ✅ function
    },
  },

  normal: {
    scale: 1,
    x: 0,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.2, ease: linearEase },
  },
};

export default function WarpedUI({ children }: { children: React.ReactNode }) {
  const { phase } = useWarp();

  const scrollY = useRef(0);

  useEffect(() => {
    if (phase !== 'normal') {
      scrollY.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY.current}px`;
      document.body.style.width = '100%';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY.current);
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [phase]);

  return (
    <motion.div
      animate={phase}
      variants={variants}
      style={{
        width: '100%',
        height: '100%',
        willChange: 'transform, filter',
        pointerEvents: phase === 'normal' ? 'auto' : 'none',
      }}
    >
      {children}
    </motion.div>
  );
}
