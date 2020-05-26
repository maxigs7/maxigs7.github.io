import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ILanguage } from 'src/app/models';

@Component({
  selector: 'app-languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: ['./languages-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagesListComponent {
  @Input()
  languages: ILanguage[] = [];

  constructor() {}

  trackBy(language: ILanguage): string {
    return language.id;
  }
}
