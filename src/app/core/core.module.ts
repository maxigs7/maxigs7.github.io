import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment } from 'src/environments/environment';
import {
  ProfileEffects,
  appReducers,
  CertificateEffects,
  ExperienceEffects,
  LanguageEffects,
  SkillEffects,
} from './store/index';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([
      CertificateEffects,
      ExperienceEffects,
      LanguageEffects,
      ProfileEffects,
      SkillEffects,
    ]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
  ],
  exports: [
    CommonModule,
    AngularFireModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
  ],
})
export class CoreModule {}
