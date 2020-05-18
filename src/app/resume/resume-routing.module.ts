import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumePageComponent } from './resume-page/resume-page.component';

const routes: Routes = [{ path: 'resume', component: ResumePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumeRoutingModule {}
