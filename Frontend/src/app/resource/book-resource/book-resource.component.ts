import { Component, OnInit } from '@angular/core';
import { Resource } from 'src/app/models/resource.model';
import { ResourceService } from '../resource.service';
import { ResourceType } from 'src/app/models/resourcetype.model';
import { Organization } from 'src/app/models/organization.model';

@Component({
  selector: 'app-book-resource',
  templateUrl: './book-resource.component.html',
  styleUrls: ['./book-resource.component.scss']
})
export class BookResourceComponent implements OnInit {

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

  bookResource(resourceId: string){
    this._resourceService.bookResource(resourceId).subscribe((res: Resource) => {
      this.resources.find(x => x._id == res._id).occupied = true;
    })
  }

}
