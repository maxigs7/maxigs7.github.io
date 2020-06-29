import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ICertificate } from 'src/app/models';

@Component({
  selector: 'app-certificates-list',
  templateUrl: './certificates-list.component.html',
  styleUrls: ['./certificates-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificatesListComponent {
  @Input()
  lang: string;

  @Input()
  certificates: ICertificate[] = [];

  constructor() {}

  trackBy(certificate: ICertificate): string {
    return certificate.id;
  }

  sortBy(): ICertificate[] {
    // DESC
    return [...this.certificates].sort((a, b) => b.date.getTime() - a.date.getTime());
  }
}
