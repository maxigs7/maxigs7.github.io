import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IAppState, CoreSelectors } from 'src/app/core/store/index';

@Component({
  selector: 'page-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  lang$ = this.store.pipe(select(CoreSelectors.selectSelectedLanguage));
  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {}
}
