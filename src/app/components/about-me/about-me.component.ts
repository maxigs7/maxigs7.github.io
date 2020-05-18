import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  IAppState,
  loadProfile,
  selectProfile,
} from 'src/app/core/store/index';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  profile$ = this.store.pipe(select(selectProfile));

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadProfile());
  }
}
