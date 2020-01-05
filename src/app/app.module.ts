import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GuruComponent } from './guru/guru.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    DropdownComponent,
    SidebarComponent,
    GuruComponent,
    HomeComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
