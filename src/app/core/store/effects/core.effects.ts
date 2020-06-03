import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, map } from 'rxjs/operators';
import { CoreActions } from '../actions/index';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class CoreEffects {
  changeLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoreActions.changeLanguage),
      tap((action) => {
        this.translateService.use(action.language);
      }),
      map(() => CoreActions.changeLanguageSuccess())
    )
  );

  constructor(private actions$: Actions, private translateService: TranslateService) {}
}
