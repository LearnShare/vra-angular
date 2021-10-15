import {
  createReducer,
  on,
} from '@ngrx/store';

import {
  setToken,
  clear,
} from './store.actions';

export interface UserState {
  token: string;
}

export interface AppState {
  user: UserState;
}

export const initialState: UserState = {
  token: 'initial-token',
};

export const userReducer = createReducer(
  initialState,
  on(setToken, (state, { token }) => ({
    ...state,
    token,
  })),
  on(clear, (state) => ({
    ...state,
    token: '',
  })),
);
