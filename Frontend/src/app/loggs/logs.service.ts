import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  url = environment.apiUrl + '/api/';
  options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  constructor(private http: HttpClient) {
  }

  getLogs(){
      return this.http.get(this.url + 'logs');
  }
}
