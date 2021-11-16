// const arrayNums1 = [7,101,3,1,9,11,100,111];
// let sum = 0;
// for (let i = 0; i < arrayNums1.length; i++) {
//   sum = sum + arrayNums1[i];
// }

// const data = ['Games', {tests: 'e2e',}]
// const [moduleName, extra] = data;
// console.log(data);

function swap (arr, i, j) {
 [arr[i], arr[j]] = [arr[j], arr[i]];
 }
const unsortedNums = [1, 3, 2];
 swap(unsortedNums, 1, 2);
 console.log(unsortedNums);

