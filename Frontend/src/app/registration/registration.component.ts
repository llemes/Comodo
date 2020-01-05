import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth-service.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  url = 'http://localhost:8080/';
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    const registerObject = this.registerForm.value;
    this.http.post(this.url + 'register', {
      fullName: registerObject.fullname,
      email: registerObject.email,
      username: registerObject.username,
      password: registerObject.password,
      role: 'member',
      organisationId: '5e0de951cfdfaa302098ca78'}).subscribe((res: any) => {
        this.router.navigate(['/login']);
      });
  }
}
