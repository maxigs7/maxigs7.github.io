import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IUrl } from 'src/app/models/index';

@Component({
  selector: 'app-social-item',
  templateUrl: './social-item.component.html',
  styleUrls: ['./social-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialItemComponent {
  @Input()
  item: IUrl;

  @Input()
  icon: string;

  constructor(private sanitizer: DomSanitizer) {}

  sanitizeUrl() {
    return this.sanitizer.bypassSecurityTrustUrl(this.item.url);
  }
}
