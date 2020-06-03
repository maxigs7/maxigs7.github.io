import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ExperienceActions } from '../actions/index';
import { ExperienceService } from '../../services/index';

@Injectable()
export class ExperienceEffects {
  loadExperiences$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExperienceActions.loadExperiences),
      exhaustMap(() =>
        this.experienceService.collection$().pipe(
          map((experiences) => ExperienceActions.loadExperiencesSuccess({ experiences })),
          catchError((error) => of(ExperienceActions.loadExperiencesFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private experienceService: ExperienceService) {}
}
