/* 1. Two Sum
Easy
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.*/

var twoSum = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j >= 0, j != i; j--) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
        return result;
      }
    }
  }
};

console.log(twoSum([1, 2, 2, 3, 4, 5], 4));

/* Runtime: 112 ms, faster than 47.71% of JavaScript online submissions for Two Sum.
  Memory Usage: 39.6 MB, less than 74.07% of JavaScript online submissions for Two Sum. */

/* 2. Add Two Numbers
Medium
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
  
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
   
Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

//SOLUTION FOR ARRAYS and NOT LINKED LISTS
var addTwoNumbers = function (l1, l2) {
  const reverseArray = (array) => {
    reversedArray = [];
    reversedNumber = 0;
    for (i = array.length - 1; i >= 0; i--) {
      reversedArray.push(array[i]);
    }
    return reversedArray;
  };

  let addedNumber =
    parseInt(reverseArray(l1).join("")) + parseInt(reverseArray(l2).join(""));

  let addedNumberToArray = Array.from(addedNumber.toString()).map(Number);
  return reverseArray(addedNumberToArray);
};
console.log(addTwoNumbers([0], [0]));
