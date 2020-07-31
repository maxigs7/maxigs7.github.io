import { IMultilingual } from './multilingual.interface';
import { IUrl } from './url.interface';

export interface IProfile {
  id: string;
  email: string;
  facebook: IUrl;
  firstName: string;
  lastName: string;
  linkedin: IUrl;
  location: string;
  phoneNumber: string;
  skype: IUrl;
  summary: IMultilingual;
  title: string;
}
