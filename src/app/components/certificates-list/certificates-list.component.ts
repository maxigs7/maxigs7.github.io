import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  selectCertificates,
  IAppState,
  loadCertificates,
} from 'src/app/core/store/index';

@Component({
  selector: 'app-certificates-list',
  templateUrl: './certificates-list.component.html',
  styleUrls: ['./certificates-list.component.scss'],
})
export class CertificatesListComponent implements OnInit {
  certificates$ = this.store.pipe(select(selectCertificates));

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadCertificates());
  }
}
