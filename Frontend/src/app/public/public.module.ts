import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './landing/login/login.component';
import { RegistrationComponent } from './landing/registration/registration.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LandingComponent, LoginComponent, RegistrationComponent]
})
export class PublicModule { }
