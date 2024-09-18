import React, { lazy, Suspense } from 'react';
import { SlotItemScore } from '../../shared/interfaces';
import { WinColors } from '../../shared/enums';


interface LazyScoreDisplayProps {
  score: SlotItemScore[];
  strike: WinColors;
  leverStatus: boolean;
}

const LazyScoreDisplay = lazy(() => import('./ScoreDisplay'));

const ScoreDisplay = (props: LazyScoreDisplayProps & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyScoreDisplay {...props} />
  </Suspense>
);

export default ScoreDisplay;
