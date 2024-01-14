// for loop
// const number = 5;
// 1-10 output
// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// let nums = ['100','300','400','60','40'];

// for(let i=1; i < nums.length; i++){

//   let num = nums[i] + nums[i];
//         console.log(num);
// }​

// console.log("jjw");

// let nums = [190, -4, -8, 2130, 87, 123, -5];
// function printPositives(array) {
//   let pos = [];
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//       pos.push(array[i]);
//     }
//   }
//   return pos;
// }

// console.log(printPositives(nums));

// let array = [10, 20, 30, -50, 60, 100, 70, 200, 1000];

// function sum(total, cur) {
//   return total + cur;
// }

// console.log(array.reduce(sum, 0));
// console.log(array.reduce);

// let totalSum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   totalSum = numbers[i] + totalSum;
// }
// console.log(totalSum);

// function sum(total, cur) {
//   return total + cur;
// }
// function name(premter){
//   operation
//   return;
// }

// (paramter)=>{
//   return operation
// }
// const numbers = [5, 2, 10, 8, 55, 3, 1, 7, 0, 1];

// const totalSum = numbers.reduce((preValue, curValue, rony, array) => {
//   return preValue + curValue;
// }, 0);
// console.log(totalSum);

// // Regular Function
// function sum(a, b) {
//   return a + b;
// }
// // Regular Function Call
// const reuslt = sum(40, 10);
// console.log(reuslt);

// // Arrow Funtion
// const add = (name) => {
//   return name;
// };
// const rony = add("Ridwan");
// console.log(rony);

// //  Arrow Function Structure
// ()=>{
//   return;
// }

// // reguler Function Structure
// function name (){
//   return;
// }
// function call();

// fibonacci sequence
// 0 = 0
// 0+1 = 1,
// 1+1 = 2,
// 1+2 = 3,
// 2+3 = 5,
// 3+5 = 8,
// 5+8 = 13,
// 8+13 = 21

// let fibonaccciFirst = 0;
// let fibonaccciSecond = 1;
// let fibonaccciResult = 0;

// for (let i = 0; i < 14; i++) {
//   fibonaccciResult = fibonaccciFirst + fibonaccciResult;
//   fibonaccciFirst = fibonaccciSecond;
//   fibonaccciSecond = fibonaccciResult;
//   console.log(fibonaccciResult);
// }

let array = [200, 300, 500, 502, 10, 30, 20, 5, 100, 870, 201, 33];
// let largest = array[0];
// for (let i = 0; i <= array.length; i++) {
//   if (array[i] > largest) {
//     console.log(largest);
//     largest = array[i];
//   } else {
//     console.log(array[i]);
//   }
// }

// const bubbleShort = (array) => {
//   const len = array.length;

//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//       if (array[j] > array[j + 1]) {
//         //swap
//         const temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// };

// console.log(array);
// bubbleShort(array);
// console.log(array);

// console.log(largest);

// a = 10;
// b = 20;
// er mane b ty nite hobe, ar b er mane a ty nite hobe.

// let a = 10;
// let b = 20;
// let c;

// c = a;
// a = b;
// b = c;

// console.log(a, b);
// console.log(c);

const arr = [5, 4, 6, 7, 2, 9, 1, 11];

// bubble sort algorithm
// [5, 4, 6, 7, 2, 9, 1];
// 1 = [4, 5, 6, 2, 7, 1, 9];
// 2 = [4, 5, 2, 6, 1, 7, 9];
// 3 = [4, 2, 5, 1, 6, 7, 9];
// 4 = [2, 4, 1, 5, 6, 7, 9];
// 5 = [2, 1, 4, 5, 6, 7, 9];
// 6 = [1, 2, 4, 5, 6, 7, 9];
// 7 = [1, 2, 4, 5, 6, 7, 9];

// const bubbleSort = (arr) => {
//   const len = arr.length;

//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len - i - 1; j++) {
//       console.log("hello");
//       if (arr[j] > arr[j + 1]) {
//         //swap
//         const temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// };

// bubleSort Time compliment

const bubbleSort = (arr) => {
  const len = arr.length;
  const swap = (arr, left, right) =>
    ([arr[left], arr[right]] = [arr[right], arr[left]]);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - j - 1; j++) {
      console.log("hello");
      if (arr[j] > arr[j + 1]) {
        //swap
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

const reuslt = bubbleSort(arr);
console.log(reuslt);
