import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '../core/core.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

const components: any[] = [NavbarComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, CoreModule, TranslateModule, RouterModule],
  exports: [...components],
})
export class ComponentsModule {}
