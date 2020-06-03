import { ILanguage } from 'src/app/models/index';

export interface ILanguageState {
  languages: ILanguage[];
  error: string | null;
  pending: boolean;
}

export const initialLanguageState: ILanguageState = {
  languages: [],
  error: null,
  pending: false,
};
