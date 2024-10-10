import React, { lazy, Suspense } from 'react';

const LazyNameBox = lazy(() => import('./NameBox'));

const NameBox = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNameBox {...props} />
  </Suspense>
);

export default NameBox;
