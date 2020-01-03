import { Component, OnInit, TemplateRef } from '@angular/core';
import { ResourceService } from './resource.service';
import { Resource } from '../models/resource.model';
import { ResourceType } from '../models/resourcetype.model';
import { Organization } from '../models/organization.model';
import { AddResourceComponent } from './add-resource/add-resource.component';


@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {

  resources: Resource[];
  resourceTypes: ResourceType[];
  organizations: Organization[];


  constructor(private _resourceService: ResourceService) { }

  ngOnInit() {
    this.getResources();
  }

  getResources(){
    this._resourceService.getResources().subscribe((res: Resource[]) => {
      this.resources = res;
      this.getResourceTypes();
      this.getOrganizations();
    });
  }

  getResourceTypes(){
    this._resourceService.getResourceTypes().subscribe((res: ResourceType[]) => {
      this.resourceTypes = res;
      this.resources.forEach(resource => {
        resource.resourceType = this.resourceTypes.find(x => x._id == resource.resourceTypeId);
      });
    });
  }

  getOrganizations(){
    this._resourceService.getOrganizations().subscribe((res: Organization[]) => {
      this.organizations = res;
      this.resources.forEach(resource => {
        resource.organization = this.organizations.find(x => x._id == resource.organisationId);
      })
    });
  }

  deleteResource(id: string){
    this._resourceService.deleteResource(id).subscribe(res => {
      this.resources = this.resources.filter(x => x._id != id);
    })
  }

  addResourceModal(){
    
  }


}
