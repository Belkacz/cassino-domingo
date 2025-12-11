import React, { lazy, Suspense } from 'react';

const LazyNameBox = lazy(() => import('./NameBox'));

interface NameBoxProps {
  fxVolume: number;
  fxSound: boolean;
}

const NameBox = (props: NameBoxProps) => (
  <Suspense fallback={null}>
    <LazyNameBox {...props} />
  </Suspense>
);

export default NameBox;
