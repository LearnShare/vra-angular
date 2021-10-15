import {
  createSelector,
} from '@ngrx/store';

import {
  UserState,
  AppState,
} from './store.module';

const selectUserState = (state: AppState) => state.user;

export const selectToken = createSelector(
  selectUserState,
  (state: UserState) => state.token,
);
