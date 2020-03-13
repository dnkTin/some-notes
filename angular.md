two-way data binding, change tracking, validation, and error handling

app.module.ts -> define external module that you'll use in application and component that belong to this module
```


Two-way data binding with ngModel
**ngModel use in form so the name attribute of input tag mut be set
**
``` <input name="name" [(ngModel)]="model.name" id="name"> ```
```<form #heroForm="ngForm">```
ngForm directive: Angular automatically creates and attaches an **ngForm** directive to the form tag.



State	Class if true	Class if false
The control has been visited.	ng-touched	ng-untouched
The control's value has changed.	ng-dirty	ng-pristine
The control's value is valid.	ng-valid	ng-invalid
 "pristine" means the user hasn't changed the value since it was displayed in this form

 [hidden]="name.valid || name.pristine"
 name is variable -> using variable with input not attribute

#spy
#newName
=> template reference variable


