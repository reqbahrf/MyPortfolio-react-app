import { createContext, useContext, useRef, useState } from 'react';
import type WarpPhase from '../../libs/types/WarpPhase';

type WarpContextValue = {
  phase: WarpPhase;
  setPhase: (phase: WarpPhase) => void;
};

const WarpContext = createContext<WarpContextValue | null>(null);

export function WarpProvider({ children }: { children: React.ReactNode }) {
  const [phase, setPhaseState] = useState<WarpPhase>('idle');
  const phaseRef = useRef<WarpPhase>('idle');

  // Prevent re-renders on every frame
  const setPhase = (next: WarpPhase) => {
    if (phaseRef.current !== next) {
      phaseRef.current = next;
      setPhaseState(next);
    }
  };

  return (
    <WarpContext.Provider value={{ phase, setPhase }}>
      {children}
    </WarpContext.Provider>
  );
}

export function useWarp() {
  const ctx = useContext(WarpContext);
  if (!ctx) throw new Error('useWarp must be used within WarpProvider');
  return ctx;
}
