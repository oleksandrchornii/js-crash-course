// const figureType = 'squere';

// function calculateFigureArea(figureType, a, b) {
//     switch (figureType) {
//         case 'squere': return  a * a;
          
//         case 'circle': return Math.PI * (a * a);
      
//         case 'rectangle': return a * b;
  
//         default: {
//             console.error('Wrong figure');
//         }
//     }
// }

// console.log(calculateFigureArea('rectangle', 2, 4));


// const obj = {
//     a: 10,
//     b: 10
// };
// obj.sum = obj.a + obj.b;
// console.log(obj.sum);
 
// const addAll = (obj) => {
//     obj.sum = obj.a + obj.b;
//     console.log(obj);6
// // }

// const objWithNums = {
//     nums: [1]
//   };
  
//   // code here
//   objWithNums.nums = [2, 3];
//   console.log(objWithNums);

function sortArr(array) {
    return array.sort((a, b) => {
        if (a > b) {
            return 1;
        } else {
            return -1;
        }
    })
} 

console.log(sortArr([1, 9, 5, 2]));


