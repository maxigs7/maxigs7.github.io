import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/core/store/states/app.state';
import { selectProfile } from 'src/app/core/store/selectors/profile.selectors';
import { loadProfile } from 'src/app/core/store/actions/profile.actions';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss'],
})
export class ResumePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
