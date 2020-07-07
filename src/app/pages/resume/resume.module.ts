import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { CertificatesListComponent } from './certificates-list/certificates-list.component';
import { ExperiencesListComponent } from './experiences-list/experiences-list.component';
import { LanguagesListComponent } from './languages-list/languages-list.component';
import { SkillsListComponent } from './skills-list/skills-list.component';

const components: any[] = [
  CertificatesListComponent,
  ExperiencesListComponent,
  LanguagesListComponent,
  SkillsListComponent,
  ResumeComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, ResumeRoutingModule, TranslateModule],
})
export class ResumeModule {}
