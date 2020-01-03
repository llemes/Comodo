import { ResourceType } from "./resourcetype.model";
import { Organization } from "./organization.model";

export class Resource {
    _id: string;
    name: string;
    occupied: boolean;
    resourceTypeId: string;
    organisationId: string;
    resourceType: ResourceType;
    organization: Organization;
}