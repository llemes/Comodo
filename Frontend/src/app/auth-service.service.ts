import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./models/user.model";

@Injectable()
export class AuthService {
     
    constructor(private http: HttpClient) {
    }
      
    login(username:string, password:string ) {
        return this.http.post('http://comodo-backend.herokuapp.com/login', {username, password});
    }
}