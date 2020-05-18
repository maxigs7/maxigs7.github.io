import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { LOAD_PROFILE, LOAD_PROFILE_SUCCESS } from '../actions/index';
import { ProfileService } from '../../services/index';

@Injectable()
export class ProfileEffects {
  loadProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_PROFILE),
      mergeMap(() =>
        this.profileService.doc$('maxigs7').pipe(
          map((profile) => ({ type: LOAD_PROFILE_SUCCESS, data: profile })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {}
}
