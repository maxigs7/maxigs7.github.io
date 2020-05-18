import { IMultilingual } from './multilingual.interface';

export interface ICertificate {
  id: string;
  certificationNumber: string;
  company: string;
  companyKey: string;
  date: Date;
  title: IMultilingual;
}
