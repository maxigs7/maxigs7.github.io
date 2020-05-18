import { ILanguage } from 'src/app/models/index';

export interface ILanguageState {
  languages: ILanguage[];
}

export const initialLanguageState: ILanguageState = {
  languages: [],
};
