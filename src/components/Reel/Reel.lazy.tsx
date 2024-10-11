import React, { lazy, Suspense } from 'react';
import { SlotItem } from '../../shared/interfaces';
import { WinColors } from '../../shared/enums';

const LazyReel = lazy(() => import('./Reel'));
interface LazyReelProps {
  symbols: any;
  spinning: any;
  setScore: (reelId: number, slot: SlotItem) => void;
  id: number;
  color: WinColors;
}

const Reel = (props: LazyReelProps & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyReel {...props} />
  </Suspense>
);

export default Reel;
