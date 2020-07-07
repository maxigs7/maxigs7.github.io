import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  IAppState,
  CoreSelectors,
  ExperienceActions,
  ExperienceSelectors,
  CertificateActions,
  CertificateSelectors,
  LanguageActions,
  LanguageSelectors,
  SkillSelectors,
  SkillActions,
} from 'src/app/core/store/index';

@Component({
  selector: 'page-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  lang$ = this.store.pipe(select(CoreSelectors.selectSelectedLanguage));
  certificates$ = this.store.pipe(select(CertificateSelectors.selectCertificates));
  experiences$ = this.store.pipe(select(ExperienceSelectors.selectExperiences));
  languages$ = this.store.pipe(select(LanguageSelectors.selectLanguages));
  skills$ = this.store.pipe(select(SkillSelectors.selectSkills));

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(CertificateActions.loadCertificates());
    this.store.dispatch(ExperienceActions.loadExperiences());
    this.store.dispatch(LanguageActions.loadLanguages());
    this.store.dispatch(SkillActions.loadSkills());
  }
}
