import { ISkill } from 'src/app/models/index';

export interface ISkillState {
  skills: ISkill[];
}

export const initialSkillState: ISkillState = {
  skills: [],
};
