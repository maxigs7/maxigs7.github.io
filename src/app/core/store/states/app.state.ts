import { RouterReducerState } from '@ngrx/router-store';
import {
  ICertificateState,
  initialCertificateState,
} from './certificate.state';
import { IExperienceState, initialExperienceState } from './experience.state';
import { ILanguageState, initialLanguageState } from './language.state';
import { IProfileState, initialProfileState } from './profile.state';
import { ISkillState, initialSkillState } from './skill.state';

export interface IAppState {
  router?: RouterReducerState;
  certificate: ICertificateState;
  experience: IExperienceState;
  language: ILanguageState;
  profile: IProfileState;
  skill: ISkillState;
}

export const initialAppState: IAppState = {
  certificate: initialCertificateState,
  experience: initialExperienceState,
  language: initialLanguageState,
  profile: initialProfileState,
  skill: initialSkillState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
