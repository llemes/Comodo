import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import { ResourceComponent } from './resource/resource.component';
import { AboutAppComponent } from './about-app/about-app.component';
import { BookResourceComponent } from './resource/book-resource/book-resource.component';
import { LogsComponent } from './loggs/logs.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegistrationComponent},
  {path:'resources', component: ResourceComponent},
  {path: 'about', component: AboutAppComponent},
  {path:'book-resource', component: BookResourceComponent},
  {path: 'logs', component: LogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
