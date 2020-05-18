import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { LOAD_EXPERIENCES, LOAD_EXPERIENCES_SUCCESS } from '../actions/index';
import { ExperienceService } from '../../services/index';

@Injectable()
export class ExperienceEffects {
  loadExperiences$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_EXPERIENCES),
      mergeMap(() =>
        this.experienceService.collection$().pipe(
          map((experiences) => ({
            type: LOAD_EXPERIENCES_SUCCESS,
            data: experiences,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private experienceService: ExperienceService
  ) {}
}
