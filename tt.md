- [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) (new in ES2015)
- `Object`
  - [`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
  - [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
  - [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
- [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)



```
parseInt
```

 the unary `+` operator 

 [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null), which is a value that indicates a deliberate non-value (and is only accessible through the `null` keyword), and [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined), which is a value of type `undefined` that indicates an uninitialized variable 



`true` and `false` 

1. `false`, `0`, empty strings (`""`), `NaN`, `null`, and `undefined` all become `false.`
2. All other values become `true.`



**let** allows you to declare block-level variables. 



[`for`...`in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in):  do something with object property

 [`for`...`of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)  do something with value



```
// dot notation
obj.name = 'Simon';
// bracket notation
obj['name'] = 'Simon';
var name = obj['name'];
```

Array vs Object

Array have .length method, they work very much like regular objects

 array literal: 

```javascript
 array literal:  // var a = ['dog', 'cat', 'hen'];

var a = new Array();
a[0] = 'dog';
a[1] = 'cat';
a[2] = 'hen';
a.length; // 3

var a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
a.length; // 101
```

 toString()  vs toLocaleString() =>  format the date follow, toLocaleString() => more readable





Functions:

```
function add() {
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum;
}

add(2, 3, 4, 5); // 14
```

the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) 

JavaScript is a prototype-based language that contains no class statement 

```
var s = makePerson('Simon', 'Willison');
var fullName = s.fullName;
fullName(); // undefined undefined
var fullNameCorrect = s.fulName.bind(s);
```

```javascript
var s = new Person('Simon', 'Willison');
s.firstNameCaps();

Person.prototype.firstNameCaps = function() {
    return this.first.toUpperCase();
}
s.firstNameCaps();		
```

**TLDR:** Interestingly, you can also add things to the prototype of built-in JavaScript objects. 

```javascript
s.reversed(); // TypeError on line 1: s.reversed is not a function

String.prototype.reversed = function() {
  var r = '';
  for (var i = this.length - 1; i >= 0; i--) {
    r += this[i];
  }
  return r;
};
```



## Closures



Different var let const

var: declared global variable.

let, const are block-scoped , anything between `{ }` 

**different between arrow function and regular function**





Variables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get *initialized* 

 This is called the "temporal dead zone". 



 the event queue in JavaScript - `setTimeout` callback function is called *after* the loop has been executed 





```
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
======NO-------
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
-----=========

console.log(member.getFullName());

You can't add properties to a constructor like you can with regular objects. 
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
Why is this beneficial? Say that we added this method to the constructor itself. Maybe not every Person instance needed this method. This would waste a lot of memory space, since they would still have that property, which takes of memory space for each instance. Instead, if we only add it to the prototype, we just have it at one spot in memory, yet they all have access to it!
```

Beneficial of using prototype.

###  *implicit type coercion* : 1 + '2' = 12



**localStorage vs session storage vs cookies**

sessionStorage => when the user closes the tab. localstorage data will be there forerer until -> localStorage.clear()



declared var multiple time -> possible, const and let can not do this.

`bind.` returns a *copy* of the function 



Event propagation: caputring from ancestor down to its children, target it and then bublling to their ancestor



JavaScript only has primitive types and objects.

Primitive types are `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, and `symbol`.



With the `super` keyword, we call that parent class's constructor with the given arguments. The parent's constructor receives the `name` argument, so we need to pass `name` to `super`. 



<https://github.com/sudheerj/javascript-interview-questions> 

1 create object: new Object(), Object.create(null), {}, new Person('hea'),  es6 class, 

### What is prototype chain?

**Prototype chaining** is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language. The prototype on object instance is available through Object.getPrototypeOf(object) or **proto** property whereas prototype on constructors function is available through object.prototype. 

Prototype -> very slow operation, use __proto__.   `Object.prototype.__proto__` is supported today in most browsers, 

```
// Set the object prototype.
// DEPRECATED. This is for example purposes only. DO NOT DO THIS in real code.
shape.__proto__ = circle;
```

__proto__, => for object instance

__prototype__ => use for class, prototype on constructor function



### What is the difference between Call, Apply and Bind?

* call: invokes function with given this on the first parameter, and argument provided one by one

  functionNeedCall.call(objectDefined, parameter1, parameter2);

* Apply: invokes function with given this on the first parameter, and pass in arguments as an array

  functionNeedCall.apply(objectDefined, [parameter1, parameter2])

* Bind:  return a new function, 

  ```
  var invite1 = invite.bind(empl1);
  invite1(argument1, argument2);
  ```

  Call and apply are pretty interchangeable. Both execute the current function immediately 

**ĐIỂM GIỐNG NHAU CALL BY APPLY**



JSON là một kiểu định dạng dữ liệu trong đó sử dụng văn bản thuần tuý, định dạng JSON sử dụng các cặp *key* - *value* để dữ liệu sử dụng . 

Javascript syntax object notation

```
JSON.parse(text)  / Converting a string to a native object 
```

```
JSON.stringify(object) / converting a native object to a string 
```



### What is the purpose of array slice method? chọn element từ bắt đầu đến kết thúc trừ phần tử,

### What is the purpose of array splice method? 

arg1: vi tri, arg2: so phan tu, 

arg3:, 4, 5, 6,...: so phan tu them vao



### How do you compare Object and Map?

**Objects** are similar to **Maps** in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key.  

1. The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.
2. The keys in Map are ordered while keys added to object are not. Thus, when iterating over it, a Map object returns keys in order of insertion.
3. You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
4. A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.
5. An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 this can be bypassed by using map = Object.create(null), but this is seldom done.
6. A Map may perform better in scenarios involving frequent addition and removal of key pairs.



1. ### What are lambda or arrow functions?

 

An arrow function is a shorter syntax for a function expression and does not have its own **this, arguments, super, or new.target**. 



###  a pure function 

 return value is only determined by its arguments without any side effects 

var  Variables will be hoisted 

let  Hoisted but not initialized  



### What is Temporal Dead Zone?

a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var.

accessing a let or const variable before its declaration (within its scope) causes a ReferenceError 





### What is Hoisting?

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution

 **the prototype based inheritance**



### What are classes in ES6?

```javascript
function Bike(model, color) {
    this.model = model;
    this.color = color;
}
//  the prototype based inheritance
Bike.prototype.getDetails = function() {
    return this.model + ' bike has' + this.color + ' color';
}

class Bike{
  constructor(color, model) {
    this.color= color;
    this.model= model;
  }

  getDetails() {
    return this.model + ' bike has' + this.color + ' color';
  }
}
```

### What are closures?

 A closure is the combination of a function and the lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables. The closure has three scope chains

1. Own scope where variables defined between its curly brackets

2. Outer function’s variables

3. Global variables

    Let's take an example of closure concept,



### Why do you need modules?

Below are the list of benefits using modules in javascript ecosystem

1. Maintainablity
2. Reusability
3. Namespacing



### What is scope in javascript?

Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.



### What is a service worker?

A Service worker is basically a script (JavaScript file) that runs in background, separate from a web page and provide features that don't need a web page or user interaction.

### How do you reuse information across service worker restarts?

The problem with service worker is that it get terminated when not in use, and restarted when it's next needed, so you cannot rely on global state within a service worker's `onfetch` and `onmessage` handlers.

### What is a Cookie?

A cookie is a piece of data that is stored on your computer to be accessed by your browser. Cookies are saved as key/value pairs. For example, you can create a cookie named username as below,



**Performance, Minify, Optimize**, Websocket



