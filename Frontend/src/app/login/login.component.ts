import { Component, OnInit } from '@angular/core';
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

  onSubmit() {
    let loginObject = this.loginForm.value;;
    this.authService.login(loginObject.username, loginObject.password).subscribe((res:any) => {
      this.cookieService.set( 'token', res.token );
      this.cookieService.set( 'username', loginObject.username );
      this.cookieService.set( 'role', res.role );

      this.router.navigate(['/about']);
    }); 
  }

}
