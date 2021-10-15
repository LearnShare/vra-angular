import {
  createAction,
  props,
} from '@ngrx/store';

export const clear = createAction('clear');
export const setToken = createAction('setToken', props<{ token: string }>());
