# Comodo backend

<!-- toc -->
- [How to run](#how-to-run)
- [API routes](#api-routes)
    * [/organisations](#organisations)
    * [/users](#users)
    * [/resourcetypes](#resourcetypes)
    * [/resources](#resources)
<!-- tocstop -->

## How to run

Install missing dependencies: 
```
npm install
```
Start the API server: 
```
npm start
```

## API routes

All routes listed below follow the same pattern:
/route
* GET: gets all entries
* POST: creates an entry
/route/id
* GET: gets entry with appropriate ID
* PUT: updates entry with appropriate ID
* DELETE: deletes entry with appropriate ID

### /organisations

Sample object for POST/PUT:

```
{
    "name": "Required Organisation Name"
}
```

Note: name must be unique.

### /users

Sample object for POST/PUT:

```
{
	"fullName": "Required Name and Surname",
	"email": "someRequiredEmail@example.com",
	"username": "requiredUsername",
	"password": "requiredPassword",
	"role": "admin or member",
	"organisationId": "existingOrganisationId"
}
```

Note: email and username must be unique.

### /resourcetypes

Sample object for POST/PUT:

```
{
    "name": "Required Unique Name",
    "imageUrl": "https://imgur.com/example"
}
```

Note: name must be unique

### /resources

Sample object for POST/PUT:

```
{
    "name": "Some name",
    "occupied": false,
    "resourceTypeId": "existingResourceTypeId",
    "organisationId": "existingOrganisationId"
}
```

Note: occupied is a boolean value