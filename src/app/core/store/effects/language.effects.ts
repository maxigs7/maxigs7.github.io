import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { LOAD_LANGUAGES, LOAD_LANGUAGES_SUCCESS } from '../actions/index';
import { LanguageService } from '../../services/index';

@Injectable()
export class LanguageEffects {
  loadLanguages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_LANGUAGES),
      mergeMap(() =>
        this.languageService.collection$().pipe(
          map((languages) => ({
            type: LOAD_LANGUAGES_SUCCESS,
            data: languages,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private languageService: LanguageService
  ) {}
}
