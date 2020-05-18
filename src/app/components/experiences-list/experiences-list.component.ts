import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  selectExperiences,
  IAppState,
  loadExperiences,
} from 'src/app/core/store/index';

@Component({
  selector: 'app-experiences-list',
  templateUrl: './experiences-list.component.html',
  styleUrls: ['./experiences-list.component.scss'],
})
export class ExperiencesListComponent implements OnInit {
  experiences$ = this.store.pipe(select(selectExperiences));

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadExperiences());
  }
}
