import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../states/index';
import { certificateReducer } from './certificate.reducer';
import { coreReducer } from './core.reducer';
import { experienceReducer } from './experience.reducer';
import { languageReducer } from './language.reducer';
import { profileReducer } from './profile.reducer';
import { skillReducer } from './skill.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  certificate: certificateReducer,
  core: coreReducer,
  experience: experienceReducer,
  language: languageReducer,
  profile: profileReducer,
  skill: skillReducer,
};
