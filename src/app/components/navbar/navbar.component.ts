import { Component, OnInit, HostBinding } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { IAppState, CoreActions, CoreSelectors } from 'src/app/core/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private isOpen: boolean = false;

  @HostBinding('class.open')
  get openClass() {
    return this.isOpen;
  }

  menuIsOpen$ = this.store.pipe(
    select(CoreSelectors.selectMenuIsOpen),
    tap((isOpen) => {
      this.isOpen = isOpen;
    })
  );

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.store.dispatch(CoreActions.toggleMenu());
  }

  changeLanguage(language: string) {
    this.store.dispatch(CoreActions.changeLanguage({ language }));
  }
}
