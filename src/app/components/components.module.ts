import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '../core/core.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { CertificatesListComponent } from './certificates-list/certificates-list.component';
import { ExperiencesListComponent } from './experiences-list/experiences-list.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { LanguagesListComponent } from './languages-list/languages-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

const components: any[] = [
  AboutMeComponent,
  CertificatesListComponent,
  ExperiencesListComponent,
  LanguagesListComponent,
  SkillsListComponent,
  NavbarComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, CoreModule, TranslateModule, RouterModule],
  exports: [...components],
})
export class ComponentsModule {}
