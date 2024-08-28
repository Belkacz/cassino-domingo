// Lever.lazy.tsx
import React, { lazy, Suspense } from 'react';

// Dynamiczne ładowanie komponentu Lever
const LazyLever = lazy(() => import('./Lever'));

interface LeverLazyProps {
  onPull: () => void;
  leverStatus: boolean;
}

const Lever = (props: LeverLazyProps) => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyLever {...props} />
  </Suspense>
);

export default Lever;
