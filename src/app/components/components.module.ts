import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeComponent } from './about-me/about-me.component';
import { CertificatesListComponent } from './certificates-list/certificates-list.component';
import { ExperiencesListComponent } from './experiences-list/experiences-list.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { LanguagesListComponent } from './languages-list/languages-list.component';
import { NavbarComponent } from './navbar/navbar.component';

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
    imports: [CommonModule],
    exports: [...components],
})
export class ComponentsModule {}
