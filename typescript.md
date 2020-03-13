*.d.ts vs *.ts
typescript won't have any clue about javascript code
using file .d.ts -> .d -> definition
```
 declare function displayMessage(message: string)
```
 -> Now can use this function in typescript without compile errors

SHORT: definition files allow you to use javascript file in typescript without having to write the code in typescript.


The TypeScript compiler generates a public field for each public constructor parameter and automatically assigns the parameter’s value to that field when you create heroes.
```
  export class Hero {

    constructor(public name: string) {}
  }
```