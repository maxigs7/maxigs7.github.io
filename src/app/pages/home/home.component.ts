import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState, ProfileSelectors, ProfileActions } from 'src/app/core/store/index';
import { take } from 'rxjs/operators';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  profile$ = this.store.pipe(select(ProfileSelectors.selectProfile));

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(ProfileActions.loadProfile());
  }
}
