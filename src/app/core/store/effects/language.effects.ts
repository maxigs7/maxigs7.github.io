import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { LanguageActions } from '../actions/index';
import { LanguageService } from '../../services/index';

@Injectable()
export class LanguageEffects {
  loadLanguages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LanguageActions.loadLanguages),
      exhaustMap(() =>
        this.languageService.collection$().pipe(
          map((languages) => LanguageActions.loadLanguagesSuccess({ languages })),
          catchError((error) => of(LanguageActions.loadLanguagesFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private languageService: LanguageService) {}
}
