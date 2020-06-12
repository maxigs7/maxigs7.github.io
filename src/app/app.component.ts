import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IAppState, CoreSelectors, CoreActions } from './core/store';
import { Store, select } from '@ngrx/store';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'maxigs7';
  menuIsOpen$ = this.store.pipe(select(CoreSelectors.selectMenuIsOpen));

  constructor(private store: Store<IAppState>, private translate: TranslateService) {
    this.store.pipe(take(1), select(CoreSelectors.selectSelectedLanguage)).subscribe((language) => {
      translate.setDefaultLang(language);
    });
  }

  useLanguage(language: string) {
    this.store.dispatch(CoreActions.changeLanguage({ language }));
  }
}
