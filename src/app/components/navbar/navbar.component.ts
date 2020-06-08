import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState, CoreActions, CoreSelectors } from 'src/app/core/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menuIsOpen$ = this.store.pipe(select(CoreSelectors.selectMenuIsOpen));

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.store.dispatch(CoreActions.toggleMenu());
  }
}
