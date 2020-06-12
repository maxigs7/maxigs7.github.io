import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'resume',
    loadChildren: () => import('./pages/resume/resume.module').then((m) => m.ResumeModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then((m) => m.ContactModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
