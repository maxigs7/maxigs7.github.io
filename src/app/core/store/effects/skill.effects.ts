import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { LOAD_SKILLS, LOAD_SKILLS_SUCCESS } from '../actions/index';
import { SkillService } from '../../services/index';

@Injectable()
export class SkillEffects {
  loadSkills$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_SKILLS),
      mergeMap(() =>
        this.skillService.collection$().pipe(
          map((skills) => ({
            type: LOAD_SKILLS_SUCCESS,
            data: skills,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private skillService: SkillService) {}
}
