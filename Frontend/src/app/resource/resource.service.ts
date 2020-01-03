import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  url = 'http://localhost:8080/api/';
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
}
