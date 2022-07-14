import { createAction, props } from '@ngrx/store';
import { Programmer } from 'src/app/models/programmer.model';

export const loadProgrammers = createAction(
  '[Programmer/API] Load Programmers',
  props<{ programmers: Programmer[] }>()
);

export const addProgrammer = createAction(
  '[Programmer/dashboard] Add Programmer',
  props<{ programmer: Programmer }>()
);
