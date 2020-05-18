import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  selectLanguages,
  IAppState,
  loadLanguages,
} from 'src/app/core/store/index';

@Component({
  selector: 'app-languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: ['./languages-list.component.scss'],
})
export class LanguagesListComponent implements OnInit {
  languages$ = this.store.pipe(select(selectLanguages));

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadLanguages());
  }
}
