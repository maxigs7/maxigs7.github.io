import { IMultilingual } from './multilingual.interface';
export interface IExperience {
  id: string;
  company: string;
  endDate: Date;
  location: string;
  responsabilities: IMultilingual[];
  startDate: Date;
  summary: IMultilingual;
  title: string;
}
