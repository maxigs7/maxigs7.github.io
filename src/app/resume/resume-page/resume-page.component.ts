import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/core/store/states/app.state';
import { selectProfile } from 'src/app/core/store/selectors/profile.selectors';
import {
    selectCertificates,
    selectExperiences,
    selectLanguages,
    selectSkills,
    loadSkills,
    loadCertificates,
    loadExperiences,
    loadLanguages,
    loadProfile,
} from 'src/app/core/store';

@Component({
    selector: 'app-resume-page',
    templateUrl: './resume-page.component.html',
    styleUrls: ['./resume-page.component.scss'],
})
export class ResumePageComponent implements OnInit {
    certificates$ = this.store.pipe(select(selectCertificates));
    experiences$ = this.store.pipe(select(selectExperiences));
    languages$ = this.store.pipe(select(selectLanguages));
    profile$ = this.store.pipe(select(selectProfile));
    skills$ = this.store.pipe(select(selectSkills));

    constructor(private store: Store<IAppState>) {}

    ngOnInit(): void {
        this.store.dispatch(loadCertificates());
        this.store.dispatch(loadExperiences());
        this.store.dispatch(loadLanguages());
        this.store.dispatch(loadProfile());
        this.store.dispatch(loadSkills());
    }
}
