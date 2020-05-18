import { createSelector } from '@ngrx/store';
import { IAppState, IProfileState } from '../states/index';

const _selectProfile = (state: IAppState) => state.profile;

export const selectProfile = createSelector(
  _selectProfile,
  (state: IProfileState) => state.profile
);
