import React, { lazy, Suspense } from 'react';

const LazySlotMachine = lazy(() => import('./SlotMachine'));

const SlotMachine = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySlotMachine {...props} />
  </Suspense>
);

export default SlotMachine;
