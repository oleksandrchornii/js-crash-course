// function sumNumsInArrays(array1, array2) {
//     return array1 + array2;
// }
// console.log(sumNumsInArrays(343, 396));

// const arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// let sentence = " ";
//  for (let i = arr.length - 1; i >= 0; i--) {
//  sentence += arr[i] + " ";
//     }
 
// const strArr = ['error01', 'in a galaxy', 'start-error', 'far far', 'away', '0994-error'];
// let filtered = strArr.filter(function(e){
//    return e.indexOf('error') === -1;
// });
// // console.log(filtered);

// let cheng = strArr.every(function(e){
//    return e.length > 4
// });
// // console.log(cheng);

// let n = 5;
// let result = 1;

// do {
//    result *= n;
//    n--;
// }while (n >= 1)

// console.log(result);

// function printEvenNumbers(n) {
//   let res = '';
//   for (let i = 0; i <= 20; i += 2) {
//     res += i + ', ';
//   }
//   console.log(res);
// }

// printEvenNumbers(20);

// function filterArrayWithStrings(array) {
//   const arr = [];
//   for (let i = 0; i <= array.length - 1; i++) {
//     if (array[i].length >= 4 && !array[i].includes('error')) {
//       arr.push(array[i]);
//     }
//   }
//   return arr;
// }
// const someArray = ['error01', 'in a galaxy', 'start-error', 'far far', 'away', '0994-error'];
// const result = filterArrayWithStrings(someArray);
// console.log(result);

// function factorial(n) {
//   let res = 1;
//   let i = 1;
//   while (i < n) {
//     res = res * (i + 1);
//     i++
//   }
//   return res;
// }
// console.log(factorial(5));

function printEvenNumbers(n) {
  let res = "";
  for (let i = 2; i <= n; i += 2) {
    res += i + ", ";
  }
  return res;
}
console.log(printEvenNumbers(22));