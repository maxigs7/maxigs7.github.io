import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ContactRoutingModule, TranslateModule],
})
export class ContactModule {}
