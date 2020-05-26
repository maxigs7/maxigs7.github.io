import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IProfile } from 'src/app/models';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent {
  @Input()
  profile: IProfile;

  constructor() {}
}
