import { createSelector } from '@ngrx/store';
import { IAppState, IExperienceState } from '../states/index';

const _selectExperiences = (state: IAppState) => state.experience;

export const selectExperiences = createSelector(
  _selectExperiences,
  (state: IExperienceState) => state.experiences
);
