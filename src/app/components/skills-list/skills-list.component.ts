import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ISkill } from 'src/app/models';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsListComponent {
  @Input()
  skills: ISkill[] = [];

  constructor() {}

  trackBy(skill: ISkill): string {
    return skill.id;
  }
}
