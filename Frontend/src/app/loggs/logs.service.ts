import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  url = 'https://localhost:8080/api/';
  options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  constructor(private http: HttpClient) {
  }

  getLogs(){
      return this.http.get(this.url + 'logs');
  }
}
