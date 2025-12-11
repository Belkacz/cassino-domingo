import React, { lazy, Suspense } from 'react';
import type { FxPlayerProps } from './FxPlayer'; // ← eksport interfejsu

const LazyFxPlayer = lazy(() => import('./FxPlayer'));

const FxPlayer = (props: FxPlayerProps) => (
  <Suspense fallback={null}>
    <LazyFxPlayer {...props} />
  </Suspense>
);

export default FxPlayer;