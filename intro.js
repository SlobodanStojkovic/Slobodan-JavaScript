/* JavaScript is a dynamic, weakly typed programming language which is compiled at runtime. It can be executed as part of a webpage in a browser or directly on any machine ("host environment").

Weakly typed languages assign types (like "number") to variables (data containters) at runtime - i.e. we cant set the types we want to use in certain places in advance. Only indirectly by making sure we are always working with the correct values. 

JavaScript was created to make webpages more dynamic (e.g. change content on a page directly from inside the browser). 

VARIABLE is a DATA CONTAINER or DATA STORAGE where the value can change.

CONSTANTS are also DATA CONTAINERS or DATA STORAGES where the value MUST NOT CHANGE.

We should use constants as ofthen as possible (i.e. whenever you actually got data that never changes) to be clear about your intentions (in your code).


========================================================================================================================================

VARIABLE NAMING
ALLOWED:
let userName > Best practice: camelCase
let ageGroup5 > Only letters and digits
let $kindOfSpecial > Starting with $ is allowed
let _internalValue > Starting with _ is allowed

NOT ALLOWED / NOT RECOMMENDED

let user_name > Allowed but bad practice!
let 21Players > Starting digits not allowed!
let user-b > No special characters!
let let > Keywords not allowed!



========================================================================================================================================
THIS

Outside any object, this in strict mode is always undefined.
This - has the value of the global object which means window in a browser context.
Using a regular function, this is automatically bound to the object.
In ARROW function this is lexically bound, which means its value is derived from the context where they are defined.

JavaScript offers a few ways to map this to any object you want using bind(object-to-bind-it-with)

The first parameter you pass to call() or apply() is always bound to this. The difference between call() and apply() is just that the second one wants an array as the arguments list, while the first accepts a variable number of parameters, which passes as function arguments.
========================================================================================================================================


A function remembers its Lexical Scope, and it’s able to access variables that were defined in the parent scope.

This is how a closure works: the function that’s returned keeps the original state in its scope.


const prepareBark = dog => {
  const say = `${dog} barked!`
  return () => {
    console.log(say)
  }
}

const rogerBark = prepareBark(`Roger`)
const sydBark = prepareBark(`Syd`)

rogerBark() //Roger barked!
sydBark()   //Syd barked!


========================================================================================================================================

The call stack is a LIFO queue (Last In, First Out).

The event loop continuously checks the call stack to see if there’s any function that needs to run.

The use case of setTimeout(() => {}), 0) is to call a function, but execute it once every other function in the code has executed.

const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  baz()
}

foo()
This code prints, maybe surprisingly:

foo
baz
bar


The Message Queue
When setTimeout() is called, the Browser or Node.js start the timer. Once the timer expires, in this case immediately as we put 0 as the timeout, the callback function is put in the Message Queue.

The Message Queue is also where user-initiated events like click or keyboard events, or fetch responses are queued before your code has the opportunity to react to them. Or also DOM events like onLoad.

The loop gives priority to the call stack, and it first processes everything it finds in the call stack, and once there’s nothing in there, it goes to pick up things in the message queue.



ES6 Job Queue
ECMAScript 2015 introduced the concept of the Job Queue, which is used by Promises (also introduced in ES6/ES2015). It’s a way to execute the result of an async function as soon as possible, rather than being put at the end of the call stack.

Promises that resolve before the current function ends will be executed right after the current function.

I find nice the analogy of a rollercoaster ride at an amusement park: the message queue puts you at the back of the queue, behind all the other people, where you will have to wait for your turn, while the job queue is the fastpass ticket that lets you take another ride right after you finished the previous one.

========================================================================================================================================

RECURSION means a function can call ITSELF.

========================================================================================================================================

Scoping is the set of rules that’s defined in a programming language to determine the value of a variable.

JavaScript uses lexical scoping, which means that the value of a variable is defined by its position when it’s written. Not when it’s called, which is something that happens with the alternative, dynamic scoping.

Scope is the set of variables that’s visible to a part of the program.

We have a global scope, block scope and function scope. If a variable is defined outside of a function or block, it’s attached to the global object and it has a global scope, which mean it’s available in every part of a program.

There is a very important difference between var, let and const declarations.

A variable defined as var inside a function is only visible inside that function. Just like function parameters.

A variable defined as const or let on the other hand is only visible inside that block where it resides.

It’s important to understand that a block (identified by a pair of curly braces) does not define a new scope for var, but it does for let and const. A new scope for var is only created when a function is created, because var does not have block scope, but function scope.


========================================================================================================================================

var condition = 0;
var anotherCondition = false;

if(condition) {
  console.log("Executed");
} else if(anotherCondition) {
  console.log("Still executed!");
} else {
  console.log("Not executed");
}

Only 0 and 1 can be cast into booleans, the rest is only TREATED as TRUE, even the negative values, because JS looks for the opposite of 0. STRING is also interpreted as TRUE. NULL is interpreted as false.


========================================================================================================================================

Undefined compared to anything except NULL is always FALSE.

NULL cant be compared and it will always return FALSE. Exception null == undefined returns TRUE.


========================================================================================================================================


Operator Precedence - google to see which operators will have greater precedence over others.



========================================================================================================================================

array.pop() - throws out last element from array
array.shift() - throws out first element from array

array.unshift("newElement") - inserts new element on begining of array

array[array.indexOf("elementWeWantToReplace")] = "newValue" - replace the value of element we want to replace

array.splice(3) - creates new array that starts from index 3. OLD ARRAY elements are also removed.
array.splice(3, 5) - creates new array that starts from index 3 and ends at index 5. OLD ARRAY elements are also removed.

array.slice(2, 4) - creates a new array starting from index 2 and until index 4 without changing old array.


========================================================================================================================================





========================================================================================================================================





========================================================================================================================================

*/
