import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ResourceComponent } from './resource.component';
import { Resource } from '../models/resource.model';
import { RequestOptions, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  url = 'https://localhost:8080/api/';
  options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  constructor(private http: HttpClient) {
  }

  getResources(){
      return this.http.get(this.url + 'resources');
  }

  //TO DO move to resource-type.service
  getResourceTypes(){
    return this.http.get(this.url + 'resourcetypes');
  }

  //TO DO move to organization.service
  getOrganizations(){
    return this.http.get(this.url + 'organisations');
  }

  deleteResource(id: string){
    return this.http.delete(this.url + "resources/" + id);
  }

  saveResource(model: Resource){
    return this.http.post(this.url + "resources", JSON.stringify(model), this.options);
  }

  bookResource(resourceId: string){
    var obj = {
      occupied: true
    }
    return this.http.put(this.url + "resources/" + resourceId, JSON.stringify(obj), this.options)
  }
}
