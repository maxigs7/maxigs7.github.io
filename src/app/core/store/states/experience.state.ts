import { IExperience } from 'src/app/models/index';

export interface IExperienceState {
  experiences: IExperience[];
}

export const initialExperienceState: IExperienceState = {
  experiences: [],
};
