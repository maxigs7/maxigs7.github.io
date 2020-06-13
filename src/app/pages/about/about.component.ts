import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { ProfileSelectors, IAppState, ProfileActions, CoreSelectors } from 'src/app/core/store/index';

@Component({
  selector: 'page-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  lang$ = this.store.pipe(select(CoreSelectors.selectSelectedLanguage));
  profile$ = this.store.pipe(select(ProfileSelectors.selectProfile));
  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(ProfileActions.loadProfile());
  }
}
