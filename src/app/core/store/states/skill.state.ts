import { ISkill } from 'src/app/models/index';

export interface ISkillState {
  skills: ISkill[];
  error: string | null;
  pending: boolean;
}

export const initialSkillState: ISkillState = {
  skills: [],
  error: null,
  pending: false,
};
