import { IExperience } from 'src/app/models/index';

export interface IExperienceState {
  experiences: IExperience[];
  error: string | null;
  pending: boolean;
}

export const initialExperienceState: IExperienceState = {
  experiences: [],
  error: null,
  pending: false,
};
