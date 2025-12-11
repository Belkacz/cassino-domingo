import React, { lazy, Suspense } from 'react';

const LazySlotMachine = lazy(() => import('./SlotMachine'));

interface SlotMachineProps {
  fxVolume: number;
  fxSound: boolean;
}

const SlotMachine = (props: SlotMachineProps) => (
  <Suspense fallback={null}>
    <LazySlotMachine {...props} />
  </Suspense>
);

export default SlotMachine;
