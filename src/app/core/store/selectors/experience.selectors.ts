import { createSelector } from '@ngrx/store';
import { IAppState, IExperienceState } from '../states/index';

const _selectExperiences = (state: IAppState) => state.experience;

const selectExperiences = createSelector(_selectExperiences, (state: IExperienceState) => state.experiences);
const selectExperiencesPending = createSelector(_selectExperiences, (state) => state.pending);
const selectExperiencesError = createSelector(_selectExperiences, (state) => state.error);

export const ExperienceSelectors = { selectExperiences, selectExperiencesPending, selectExperiencesError };
