import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ILanguage } from 'src/app/models';

@Component({
  selector: 'app-languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: ['./languages-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagesListComponent {
  static totalBars: number[] = [1, 2, 3, 4, 5];

  @Input()
  languages: ILanguage[] = [];

  constructor() {}

  get bars() {
    return LanguagesListComponent.totalBars;
  }

  trackBy(language: ILanguage): string {
    return language.id;
  }

  sortBy(): ILanguage[] {
    return [...this.languages].sort((a, b) => a.order - b.order);
  }
}
