reactive and template-driven 

**Reactive forms** are more robust: they're more scalable, reusable, and testable 

**Template-driven forms** are useful for adding a simple form to an app, such as an email list signup form.  

|                    | REACTIVE                                  | TEMPLATE-DRIVEN                      |
| ------------------ | ----------------------------------------- | ------------------------------------ |
| Setup (form model) | More explicit, created in component class | Less explicit, created by directives |
| Data model         | Structured                                | Unstructured                         |
| Predictability     | Synchronous                               | Asynchronous                         |
| Form validation    | Functions                                 | Directives                           |
| Mutability         | Immutable                                 | Mutable                              |
| Scalability        | Low-level API access                      | Abstraction on top of APIs           |



`FormControl` tracks the value and validation status of an **individual** form control. 

`FormGroup` tracks the same values and status for a **collection** of form controls. 

`FormArray` tracks the same values and status for an **array** of form controls. 



The `FormBuilder` service has three methods: `control()`, `group()`, and `array()`. These are **factory** **methods** for generating instances in your component classes including form controls, form groups, and form arrays. 