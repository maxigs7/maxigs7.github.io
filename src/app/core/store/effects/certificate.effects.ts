import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CertificateActions } from '../actions/index';
import { CertificateService } from '../../services/index';

@Injectable()
export class CertificateEffects {
  loadCertificates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CertificateActions.loadCertificates),
      exhaustMap(() =>
        this.certificateService.collection$().pipe(
          map((certificates) => CertificateActions.loadCertificatesSuccess({ certificates })),
          catchError((error) => of(CertificateActions.loadCertificatesFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private certificateService: CertificateService) {}
}
