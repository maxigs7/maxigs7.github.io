import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'src/environments/environment';
import {
  ProfileEffects,
  appReducers,
  CertificateEffects,
  ExperienceEffects,
  LanguageEffects,
  SkillEffects,
  CoreEffects,
} from './store/index';
import { PhoneNumberInternationalPipe, PhoneURIPipe } from './pipes/index';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([
      CertificateEffects,
      CoreEffects,
      ExperienceEffects,
      LanguageEffects,
      ProfileEffects,
      SkillEffects,
    ]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    StoreDevtoolsModule.instrument(),
  ],
  declarations: [PhoneNumberInternationalPipe, PhoneURIPipe],
  exports: [
    CommonModule,
    AngularFireModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    PhoneNumberInternationalPipe,
    PhoneURIPipe,
  ],
})
export class CoreModule {}
