import React, { lazy, Suspense } from 'react';

const LazyMusicPlayer = lazy(() => import('./MusicPlayer'));

const MusicPlayer = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMusicPlayer {...props} />
  </Suspense>
);

export default MusicPlayer;
