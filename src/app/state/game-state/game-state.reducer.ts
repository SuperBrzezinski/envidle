import { createReducer, on } from '@ngrx/store';
import { addToScore, gameOver } from './game-state.actions';

export interface GameState {
  status: GameStatus;
  score: number;
}

export type GameStatus = 'configuring' | 'playing' | 'gameover';

export const initialState: GameState = {
  status: 'playing',
  score: 0,
};

export const gameStateReducer = createReducer(
  initialState,
  on(gameOver, (state) => ({
    ...state,
    status: 'gameover',
  })),
  on(addToScore, (state, { score }) => ({ ...state, score: score + 20 }))
);
