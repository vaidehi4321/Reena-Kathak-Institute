import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GuruComponent } from '../app/guru/guru.component';
import {HomeComponent } from '../app/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'guru', component: GuruComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
