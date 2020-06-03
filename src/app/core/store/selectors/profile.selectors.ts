import { createSelector } from '@ngrx/store';
import { IAppState, IProfileState } from '../states/index';

const _selectProfile = (state: IAppState) => state.profile;

const selectProfile = createSelector(_selectProfile, (state: IProfileState) => state.profile);
const selectProfilePending = createSelector(_selectProfile, (state) => state.pending);
const selectProfileError = createSelector(_selectProfile, (state) => state.error);

export const ProfileSelectors = { selectProfile, selectProfilePending, selectProfileError };
