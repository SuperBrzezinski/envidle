import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on, State } from '@ngrx/store';
import { Programmer } from 'src/app/models/programmer.model';
import * as ProgrammerActions from './programmer.actions';

export interface ProgrammerState extends EntityState<Programmer> {}

const programmerAdapter = createEntityAdapter<Programmer>({
  sortComparer: false,
});

const programmerInitialState: ProgrammerState =
  programmerAdapter.getInitialState();

export const programmerReducer = createReducer(
  programmerInitialState,
  on(ProgrammerActions.loadProgrammers, (state, { programmers }) => {
    return programmerAdapter.setAll(programmers, state);
  }),
  on(ProgrammerActions.addProgrammer, (state, { programmer }) => {
    return programmerAdapter.addOne(programmer, state);
  })
);

const { selectIds, selectEntities, selectAll, selectTotal } =
  programmerAdapter.getSelectors();

export const selectProgrammerIds = selectIds;

// select the dictionary of user entities
export const selectProgrammerEntities = selectEntities;

// select the array of users
export const selectAllProgrammers = selectAll;

// select the total user count
export const selectProgrammerTotal = selectTotal;
