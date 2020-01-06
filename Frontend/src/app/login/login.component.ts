import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../auth-service.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('recaptcha') recaptchaElement: ElementRef;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
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
        let loginObject = this.loginForm.value;
        this.authService.login(loginObject.username, loginObject.password).subscribe((res:any) => {
        this.cookieService.set( 'token', res.token );
        this.cookieService.set( 'username', loginObject.username );
        this.cookieService.set( 'role', res.role );
        this.router.navigate(['/about']);

        });

      }
    });
  }

  onSubmit() {

    this.addRecaptchaScript();
  }

}
