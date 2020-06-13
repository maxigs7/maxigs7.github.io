import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState, CoreSelectors } from 'src/app/core/store/index';

@Component({
  selector: 'page-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  lang$ = this.store.pipe(select(CoreSelectors.selectSelectedLanguage));
  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {}
}
