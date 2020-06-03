import { IProfile } from 'src/app/models/index';

export interface IProfileState {
  profile: IProfile;
  error: string | null;
  pending: boolean;
}

export const initialProfileState: IProfileState = {
  profile: null,
  error: null,
  pending: false,
};
