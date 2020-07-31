import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IAppState, CoreSelectors, ProfileSelectors, ProfileActions } from 'src/app/core/store/index';

@Component({
  selector: 'page-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  lang$ = this.store.pipe(select(CoreSelectors.selectSelectedLanguage));
  profile$ = this.store.pipe(select(ProfileSelectors.selectProfile));

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(ProfileActions.loadProfile());
  }
}
