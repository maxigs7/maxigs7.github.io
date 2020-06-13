import { IMultilingual } from './multilingual.interface';

export interface IProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  linkedin: string;
  location: string;
  phoneNumber: string;
  skype: string;
  summary: IMultilingual;
  title: string;
}
