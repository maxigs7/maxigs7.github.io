import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store, select } from '@ngrx/store';
import { take, filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { IAppState, CoreSelectors, CoreActions } from './core/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy, OnInit {
  private subscription: Subscription = new Subscription();
  title = 'maxigs7';
  menuIsOpen$ = this.store.pipe(select(CoreSelectors.selectMenuIsOpen));

  constructor(private store: Store<IAppState>, private translate: TranslateService, private router: Router) {
    this.store.pipe(take(1), select(CoreSelectors.selectSelectedLanguage)).subscribe((language) => {
      translate.setDefaultLang(language);
    });
  }
  ngOnInit(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((val) => {
      this.store.dispatch(CoreActions.closeMenu());
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  useLanguage(language: string) {
    this.store.dispatch(CoreActions.changeLanguage({ language }));
  }
}
