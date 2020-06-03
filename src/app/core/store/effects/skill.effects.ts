import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SkillActions } from '../actions/index';
import { SkillService } from '../../services/index';

@Injectable()
export class SkillEffects {
  loadSkills$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillActions.loadSkills),
      exhaustMap(() =>
        this.skillService.collection$().pipe(
          map((skills) => SkillActions.loadSkillsSuccess({ skills })),
          catchError((error) => of(SkillActions.loadSkillsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private skillService: SkillService) {}
}
