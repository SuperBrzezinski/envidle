import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { GameState } from './game-state.reducer';

export const selectGlobalState = (state: AppState) => state;
export const selectGameState = (state: AppState) => state.gameState;

export const selectGameStateStatus = createSelector(
  selectGameState,
  (gameState: GameState) => gameState.status.valueOf()
);

export const selectGameStateScore = createSelector(
  selectGameState,
  (gameState: GameState) => gameState.score.valueOf()
);
