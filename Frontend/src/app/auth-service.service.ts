import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./models/user.model";

@Injectable()
export class AuthService {
     url = 'https://localhost:8080/';
    constructor(private http: HttpClient) {
    }

    login(username:string, password:string ) {
        return this.http.post(this.url + 'login', {username, password});
    }
}
