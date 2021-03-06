import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IExperience } from 'src/app/models';

@Component({
  selector: 'app-experiences-list',
  templateUrl: './experiences-list.component.html',
  styleUrls: ['./experiences-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencesListComponent {
  @Input()
  lang: string;

  @Input()
  experiences: IExperience[] = [];

  constructor() {}

  trackBy(experience: IExperience): string {
    return experience.id;
  }

  sortBy(): IExperience[] {
    // DESC
    return [...this.experiences].sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
  }
}
