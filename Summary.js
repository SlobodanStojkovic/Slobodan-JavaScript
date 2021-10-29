/* Slobodan JavaScript Summary */
let object = {
    name: "Max",
    age: 37,
    status: "married"
}

object["married at"] = 30;  //adds property "married at": 30
object.kids = 3;            //adds property kids: 3

console.log(object)
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
let fruits = ['Apple', 'Banana']
console.log(fruits.length)
// 2


/* Access an Array item using the index position */
let first = fruits[0]
// Apple

let last = fruits[fruits.length - 1]
// Banana


/* Loop over an Array */
fruits.forEach(function(item, index, array) {
  console.log(item, index)
})
// Apple 0
// Banana 1


/* Add an item to the end of an Array */
let newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]


/* Remove an item from the end of an Array */
let last = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]


/* Remove an item from the beginning of an Array */
let first = fruits.shift() // remove Apple from the front
// ["Banana"]


/* Add an item to the beginning of an Array */
let newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]


/* Find the index of an item in the Array */
fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana')
// 1


/* Remove an item by index position */
let removedItem = fruits.splice(pos, 1) // this is how to remove an item
// ["Strawberry", "Mango"]


/* Remove items from an index position */
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1
let n = 2

let removedItems = vegetables.splice(pos, n)
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.

console.log(vegetables)
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems)
// ["Turnip", "Radish"]


/* Copy an Array */
let shallowCopy = fruits.slice() // this is how to make a copy
// ["Strawberry", "Mango"]




const fruits = []
fruits.push('banana', 'apple', 'peach')

console.log(fruits.length) // 3


/* When setting a property on a JavaScript array when the property is a valid array index and that index is outside the current bounds of the array, the engine will update the array's length property accordingly: */
fruits[5] = 'mango'
console.log(fruits[5])            // 'mango'
console.log(Object.keys(fruits))  // ['0', '1', '2', '5']
console.log(fruits.length)        // 6

/* Increasing the length. */
fruits.length = 10
console.log(fruits)              // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)) // ['0', '1', '2', '5']
console.log(fruits.length)       // 10
console.log(fruits[8])           // undefined


/* Decreasing the length property does, however, delete elements. */
fruits.length = 2
console.log(Object.keys(fruits)) // ['0', '1']
console.log(fruits.length)       // 2




/* The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.*/
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

/* You shouldn't be using map if:
you're not using the array it returns; and/or
you're not returning a value from the callback. */


/* More about Arrays at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array */



