import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  IAppState,
  CoreSelectors,
  ExperienceSelectors,
  CertificateSelectors,
  ExperienceActions,
  CertificateActions,
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
  skills$ = this.store.pipe(select(SkillSelectors.selectSkills));
  experiences$ = this.store.pipe(select(ExperienceSelectors.selectExperiences));
  certificates$ = this.store.pipe(select(CertificateSelectors.selectCertificates));

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(SkillActions.loadSkills());
    this.store.dispatch(ExperienceActions.loadExperiences());
    this.store.dispatch(CertificateActions.loadCertificates());
  }
}
