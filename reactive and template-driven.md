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



| Directive              | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| `FormControlDirective` | Syncs a standalone `FormControl` instance to a form control element. |
| `FormControlName`      | Syncs `FormControl` in an existing `FormGroup` instance to a form control element by name. |
| `FormGroupDirective`   | Syncs an existing `FormGroup` instance to a DOM element.     |
| `FormGroupName`        | Syncs a nested `FormGroup` instance to a DOM element.        |
| `FormArrayName`        | Syncs a nested `FormArray` instance to a DOM element.        |

| Class             | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| `AbstractControl` | The abstract base class for the concrete form control classes `FormControl`, `FormGroup`, and `FormArray`. It provides their common behaviors and properties. |
| `FormControl`     | Manages the value and validity status of an individual form control. It corresponds to an HTML form control such as `<input>` or `<select>`. |
| `FormGroup`       | Manages the value and validity state of a group of `AbstractControl` instances. The group's properties include its child controls. The top-level form in your component is `FormGroup`. |
| `FormArray`       | Manages the value and validity state of a numerically indexed array of `AbstractControl` instances. |
| `FormBuilder`     | An injectable service that provides factory methods for creating control instances. |