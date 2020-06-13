import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';

@NgModule({
  declarations: [ResumeComponent],
  imports: [CommonModule, ResumeRoutingModule, TranslateModule],
})
export class ResumeModule {}
