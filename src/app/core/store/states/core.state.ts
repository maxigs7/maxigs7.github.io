export interface ICoreState {
  selectedLanguage: string;
  menuIsOpen: boolean;
}

export const initialCoreState: ICoreState = {
  selectedLanguage: 'en',
  menuIsOpen: false,
};
