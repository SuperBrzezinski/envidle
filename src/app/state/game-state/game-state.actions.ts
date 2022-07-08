import { createAction, props } from '@ngrx/store';
import { GameStatus } from './game-state.reducer';

export const gameOver = createAction(
  '[Game Status] gameover',
  props<{
    status: GameStatus;
  }>()
);

export const addToScore = createAction(
  '[Game Score] add value to score',
  props<{ score: number }>()
);
