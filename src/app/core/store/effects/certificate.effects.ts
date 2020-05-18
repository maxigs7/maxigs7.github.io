import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { LOAD_CERTIFICATES, LOAD_CERTIFICATES_SUCCESS } from '../actions/index';
import { CertificateService } from '../../services/index';

@Injectable()
export class CertificateEffects {
  loadCertificates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_CERTIFICATES),
      mergeMap(() =>
        this.certificateService.collection$().pipe(
          map((certificates) => ({
            type: LOAD_CERTIFICATES_SUCCESS,
            data: certificates,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private certificateService: CertificateService
  ) {}
}
