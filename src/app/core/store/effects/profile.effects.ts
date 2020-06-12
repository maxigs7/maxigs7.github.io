import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

import { IAppState } from '../states/index';
import { ProfileActions } from '../actions/index';
import { ProfileService } from '../../services/index';
import { ProfileSelectors } from '../selectors/index';

@Injectable()
export class ProfileEffects {
  loadProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.loadProfile),
      withLatestFrom(this.store.select(ProfileSelectors.selectProfile)),
      exhaustMap(() =>
        this.profileService.doc$('maxigs7').pipe(
          map((profile) => ProfileActions.loadProfileSuccess({ profile })),
          catchError((error) => of(ProfileActions.loadProfileFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private store: Store<IAppState>, private profileService: ProfileService) {}
}
