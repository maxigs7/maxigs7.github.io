import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/core/store/states/app.state';
import {
  ProfileActions,
  ProfileSelectors,
  CertificateActions,
  CertificateSelectors,
  SkillSelectors,
  SkillActions,
  ExperienceSelectors,
  ExperienceActions,
  LanguageActions,
  LanguageSelectors,
} from 'src/app/core/store';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss'],
})
export class ResumePageComponent implements OnInit {
  profile$ = this.store.pipe(select(ProfileSelectors.selectProfile));
  profilePending$ = this.store.pipe(select(ProfileSelectors.selectProfilePending));
  profileError$ = this.store.pipe(select(ProfileSelectors.selectProfileError));

  skills$ = this.store.pipe(select(SkillSelectors.selectSkills));
  skillPending$ = this.store.pipe(select(SkillSelectors.selectSkillsPending));
  skillError$ = this.store.pipe(select(SkillSelectors.selectSkillsError));

  experiences$ = this.store.pipe(select(ExperienceSelectors.selectExperiences));
  experiencePending$ = this.store.pipe(select(ExperienceSelectors.selectExperiencesPending));
  experienceError$ = this.store.pipe(select(ExperienceSelectors.selectExperiencesError));

  certificates$ = this.store.pipe(select(CertificateSelectors.selectCertificates));
  certificatePending$ = this.store.pipe(select(CertificateSelectors.selectCertificatesPending));
  certificateError$ = this.store.pipe(select(CertificateSelectors.selectCertificatesError));

  languages$ = this.store.pipe(select(LanguageSelectors.selectLanguages));
  languagePending$ = this.store.pipe(select(LanguageSelectors.selectLanguagesPending));
  languageError$ = this.store.pipe(select(LanguageSelectors.selectLanguagesError));

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(ProfileActions.loadProfile());
    this.store.dispatch(SkillActions.loadSkills());
    this.store.dispatch(ExperienceActions.loadExperiences());
    this.store.dispatch(CertificateActions.loadCertificates());
    this.store.dispatch(LanguageActions.loadLanguages());
  }
}
