import { createAction, props } from '@ngrx/store';
import { IProfile } from 'src/app/models/index';

export const LOAD_PROFILE = '[Profile] Load Profile';
export const LOAD_PROFILE_SUCCESS = '[Profile] Load Profile Success';
export const LOAD_PROFILE_FAILURE = '[Profile] Load Profile Failure';

export const loadProfile = createAction(LOAD_PROFILE);

export const loadProfileSuccess = createAction(
    LOAD_PROFILE_SUCCESS,
    props<{ data: IProfile }>()
);

export const loadProfileFailure = createAction(
    LOAD_PROFILE_FAILURE,
    props<{ error: any }>()
);
