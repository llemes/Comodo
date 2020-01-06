import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  url = 'https://localhost:8080/';
  registerForm: FormGroup;
  @ViewChild('recaptcha') recaptchaElement: ElementRef;

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
  addRecaptchaScript() {
    window['grecaptchaCallback'] = () => {
      this.renderReCaptcha();
    }
    (function(d, s, id, obj){
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { obj.renderReCaptcha(); return;}
      js = d.createElement(s); js.id = id;
      js.src = 'https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&amp;render=explicit';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'recaptcha-jssdk', this));
  }

  renderReCaptcha() {
    window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
      'sitekey' : '6LddkcwUAAAAANyIOSfAzt2J6MLOVDbesiIcX1wK',
      'callback': (response: string) => {
        this.router.navigate(['/login']);
      }
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
        this.addRecaptchaScript();
      });
  }
}
