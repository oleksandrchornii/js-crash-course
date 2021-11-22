// const arrayNums1 = [7,101,3,1,9,11,100,111];
// let sum = 0;
// for (let i = 0; i < arrayNums1.length; i++) {
//   sum = sum + arrayNums1[i];
// }

// const data = ['Games', {tests: 'e2e',}]
// const [moduleName, extra] = data;
// console.log(data);

// function swap (arr, i, j) {
//  [arr[i], arr[j]] = [arr[j], arr[i]];
//  }
// const unsortedNums = [1, 3, 2];
//  swap(unsortedNums, 1, 2);
//  console.log(unsortedNums);

// let i;
// for(i = 1; i < 20 && i % 2 === 0 ? i : 1; i++ ){
    // console.log(i);
// }
// console.log(i);

// const arr = [5, 2, 3];
// arr.sort(
//     (curr, next) => {
//         if (curr < next) {
//             return -1;
//         }
//     }
// )

// const nums = [1,3, 2, 6, 6, 6,];
// let sum = 0;
// nums.forEach((num, index) => {
//     sum += num;
// })

// const nums = [1,3, 2, 6, 6, 6,];
// const updateNums = nums.map(function(num, index) {
//     return num + 10;
// });
// console.log(updateNums);

// const nums = [1,3, 2, 6, 6, 6,];
// const updateNums = nums.map(num => num + 10);

// const a = [7,101,3,1,9,11,100,111];
// function sortArray(array) {
//     const newArr = array.sort((a, b) => {
//       if (a < b) {
//         return -1;
//       }else {
//         return 1
//       }
//     })
//     return newArr;
// }
//   console.log(sortArray(a));

let array = [12, 3, 6, 20, 55];

let isBigEnough = (num) => num > 15;

let newArr = array.filter(isBigEnough);
// console.log(newArr);

let nums = [12, 3, 6, 20, 55];

let res = nums.map(function(elem) {
    return elem * 2;
});


const array = [1, 2, 3, 4, 5];

let total = array.reduce(function (acc, elem) {
    console.log('Acc: ', acc, 'Current elem: ', elem);
    return acc + elem;
}, 10);

