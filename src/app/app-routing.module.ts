import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PanelistComponent } from './panelist/panelist.component';

const routes: Routes = [
  {
    path:'panelist',
    component: PanelistComponent
  },
  {
    path:'',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
