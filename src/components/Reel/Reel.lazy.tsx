import React, { lazy, Suspense } from 'react';

const LazyReel = lazy(() => import('./Reel'));
interface LazyReelProps {
  symbols: any;
  spinning: any;
}

const Reel = (props: LazyReelProps & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyReel {...props} />
  </Suspense>
);

export default Reel;
