import { createAction, props } from '@ngrx/store';
import { IProfile } from 'src/app/models/index';

const loadProfile = createAction('[Profile] Load Profile');
const loadProfileSuccess = createAction('[Profile] Load Profile Success', props<{ profile: IProfile }>());
const loadProfileFailure = createAction('[Profile] Load Profile Failure', props<{ error: any }>());

export const ProfileActions = { loadProfile, loadProfileSuccess, loadProfileFailure };
