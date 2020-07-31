import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { ContactRoutingModule } from './contact-routing.module';
import { SocialItemComponent } from './social-item/social-item.component';
import { ContactComponent } from './contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [SocialItemComponent, ContactComponent, ContactFormComponent],
  imports: [CommonModule, ContactRoutingModule, TranslateModule, ReactiveFormsModule],
})
export class ContactModule {}
