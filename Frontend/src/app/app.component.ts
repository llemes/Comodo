import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(public cookieService: CookieService,
              private router: Router) {
  }
  ngOnInit() {
	  
  }

  getUsername(){
    return this.cookieService.get("username");
  }

  expandDropdown(){
    if (!document.getElementById("dropdown").classList.contains("show")){
      document.getElementById("dropdown").className = "dropdown show";
      document.getElementById("dropdown-menu").className = "dropdown-menu dropdown-menu-right show";

    }
    else{
      document.getElementById("dropdown").className = "dropdown";
      document.getElementById("dropdown-menu").className = "dropdown-menu";
    }
  }

  logout(){
    this.cookieService.delete("token");
    this.cookieService.delete("username");
    this.cookieService.delete("role");
    this.router.navigate(['/login']);
  }
}
