const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [15, 6, 3, 20, 11];
// const mergetArray = [...array1, ...array2];
// function mergeArraysWithoutDuplicates(array1, array2) {
    // const mergetArray = [1, 2, 3, 4, 5, 6, 15, 6, 3, 20, 11];
    // const newArr = [...new Set(mergetArray)];
// }
// console.log(newArr);
// const mergeArr = array1.concat(array2);
// const newArray = mergeArr.filter(
//     (item, index) => index === mergeArr.filterOf(item)
//   );
//   console.log(newArr);

function mergeArraysWithoutDuplicates(array1, array2) {
    const mergeArray = array1.concat(array2);
    // const newArr = mergeArray.from(new Set(mergeArray));
    const newArr = mergeArray.reduce((uniq, item) => {
        return uniq.includes(item) ? uniq : [...uniq, item];
    }, [])
  
}
  
