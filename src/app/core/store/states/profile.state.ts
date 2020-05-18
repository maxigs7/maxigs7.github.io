import { IProfile } from 'src/app/models/index';

export interface IProfileState {
  profile: IProfile;
}

export const initialProfileState: IProfileState = {
  profile: null,
};
