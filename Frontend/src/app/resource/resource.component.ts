import { Component, OnInit, TemplateRef } from '@angular/core';
import { ResourceService } from './resource.service';
import { Resource } from '../models/resource.model';
import { ResourceType } from '../models/resourcetype.model';
import { Organization } from '../models/organization.model';


@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {

  resources: Resource[];
  resourceTypes: ResourceType[];
  organizations: Organization[];

  selectedResourceTypeId : string = "";
  resourceNameNew: string = "";
  areFieldsValid: boolean = true;

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

  addResource(){
    if (this.selectedResourceTypeId == "" || this.resourceNameNew == ""){
      this.areFieldsValid = false;
      return;
    }

    var newResource: Resource = new Resource();
    newResource.name = this.resourceNameNew;
    newResource.resourceTypeId = this.selectedResourceTypeId;
    newResource.occupied = false;

    this._resourceService.saveResource(newResource).subscribe((res:Resource) => {
      res.resourceType = this.resourceTypes.find(x => res.resourceTypeId == x._id);
      res.organization = this.organizations.find(x => res.organisationId == x._id);
      this.resources.push(res);
    });

    this.selectedResourceTypeId = "";
    this.resourceNameNew = "";
  }


}
