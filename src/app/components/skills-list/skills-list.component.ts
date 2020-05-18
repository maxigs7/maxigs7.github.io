import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectSkills, IAppState, loadSkills } from 'src/app/core/store/index';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss'],
})
export class SkillsListComponent implements OnInit {
  skills$ = this.store.pipe(select(selectSkills));

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadSkills());
  }
}
