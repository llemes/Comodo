import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./models/user.model";
import { environment } from "src/environments/environment";

@Injectable()
export class AuthService {
     url = environment.apiUrl;
    constructor(private http: HttpClient) {
    }

    login(username:string, password:string ) {
        return this.http.post(this.url + 'login', {username, password});
    }
}
