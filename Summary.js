/* Slobodan JavaScript Summary */
let object = {
  name: "Max",
  age: 37,
  status: "married",
};

object["married at"] = 30; //adds property "married at": 30
object.kids = 3; //adds property kids: 3

console.log(object);
/*
{
  name: 'Max',
  age: 37,
  status: 'married',
  'married at': 30,
  secondMarriage: 35,
  kids: 3
}
 */

/* Create an Array */
let fruits = ["Apple", "Banana"];
console.log(fruits.length);
// 2

/* Access an Array item using the index position */
let first = fruits[0];
// Apple

let last = fruits[fruits.length - 1];
// Banana

/* Loop over an Array */
fruits.forEach(function (item, index, array) {
  console.log(item, index);
});
// Apple 0
// Banana 1

/* Add an item to the end of an Array */
let newLength = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]

/* Remove an item from the end of an Array */
let last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"]

/* Remove an item from the beginning of an Array */
let first = fruits.shift(); // remove Apple from the front
// ["Banana"]

/* Add an item to the beginning of an Array */
let newLength = fruits.unshift("Strawberry"); // add to the front
// ["Strawberry", "Banana"]

/* Find the index of an item in the Array */
fruits.push("Mango");
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf("Banana");
// 1

/* Remove an item by index position */
let removedItem = fruits.splice(pos, 1); // this is how to remove an item
// ["Strawberry", "Mango"]

/* Remove items from an index position */
let vegetables = ["Cabbage", "Turnip", "Radish", "Carrot"];
console.log(vegetables);
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1;
let n = 2;

let removedItems = vegetables.splice(pos, n);
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.

console.log(vegetables);
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems);
// ["Turnip", "Radish"]

/* Copy an Array */
let shallowCopy = fruits.slice(); // this is how to make a copy
// ["Strawberry", "Mango"]

const fruits = [];
fruits.push("banana", "apple", "peach");

console.log(fruits.length); // 3

/* When setting a property on a JavaScript array when the property is a valid array index and that index is outside the current bounds of the array, the engine will update the array's length property accordingly: */
fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6

/* Increasing the length. */
fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined

/* Decreasing the length property does, however, delete elements. */
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2

/* The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.*/
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

/* You shouldn't be using map if:
you're not using the array it returns; and/or
you're not returning a value from the callback. */

/* The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned. */

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// expected output: 12

/* If you need the index of the found element in the array, use findIndex().
If you need to find the index of a value, use Array.prototype.indexOf(). (It’s similar to findIndex(), but checks each element for equality with the value instead of using a testing function.)
If you need to find if a value exists in an array, use Array.prototype.includes(). Again, it checks each element for equality with the value instead of using a testing function.
If you need to find if any element satisfies the provided testing function, use Array.prototype.some(). */

/* Find an object in an array by one of its properties */

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }

/* Using arrow function and destructuring */

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }

/* More about Arrays at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array */

/* JWT Tokens are used for AUTHORIZATION. After user AUTHENTICATE with his credidentials then he needs recieves token with which he can AUTHORIZED to access content on web site.

JSON Web Tokens consist of three parts separated by dots (.), which are:
Header (algorithm and token type)
Payload (subject, name, iat - issued at, expires at)
Signature (verify signature)

JWT 
POST /use/login is sent to server, which then create JWT for user with secret and sends JWT to browser. User then sends request with JWT and server verifies JWT signature and get user from jwt, if everything is okay, server sends response to user. USER IS STORED ON CLIENT BROWSER, so this way if a same company uses more servers we dont have to re-login everytime server transfers us on other server because of server overload for example.

COOKIE
POST /user/login is sent to server which stores user in Session in Server Memory and sends session ID as Cookie, then user send request with Session ID Cookie to get user from session based on ID and verify it.

Cookies capacity is 4kb(Local Storage 10mb, Session Storage 5mb), expiration is manually set, accessible from any window, they are stored in browser and server(LS and SS are browser only), and they are sent with requests (LS and SS are not). Cookies are supported in HTML4 and HTML5.

Unless we need to send to server we should always use Local Storage and Session Storage.

To set cookies we can use:
document.cookie = "name=SomeCookieName; experes=" + new Date(2025, 0, 1).toUTCString()"

With the session the Authentication state is handled on the server while tokens are managed on the client.
*/


/* 
GET request means that you just want to READ THE DATA from the REST API
POST >>> CREATE THE DATA
PATCH >>> UPDATE THE DATA
DELETE >>> REMOVE THE DATA

HEADERS contain metadata about the request.
Accept: header can tell the server that we want the data in specific format (application/json)
Authorization: header tells the server that we are allowed to make that request (<token>),
BODY: contains custom payload of data.
*/