import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [ResumePageComponent],
  imports: [CommonModule, ComponentsModule, ResumeRoutingModule],
})
export class ResumeModule {}
