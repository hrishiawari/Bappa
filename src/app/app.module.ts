import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SignInComponent } from './side-bar/sign-in.component';
import{LoginOutService}from'./AllServices/login-out.service';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LoginOutService
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
