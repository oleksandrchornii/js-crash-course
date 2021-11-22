// const Marvel = {
//     yearCreation: 1939,
//     mainCharacter: 'Spider Man',
//     mainTeam: 'Avengers',
// };

// function extendObject(obj, field, value) {
//     const newObj = Object.assign({}, obj);
//     newObj[field] = value;

//     return newObj;
// }
// const NewMarvel = extendObject(Marvel, 'mainVillain', 'Venom');

// console.log('Marvel object: ', Marvel);
// console.log('NewMarvel object: ', NewMarvel);

// const car = {
//     model: 'BMW',
//     year: 2021,
//     color: 'yellow',
// };

// function extendObj(obj, field, value) {
//     const newObj = Object.assign({}, obj);
//     newObj[field] = value;
//     return newObj;
// }

// const newCar = extendObj(car, 'garanty', '5 year');
// console.log('car object: ', car);
// console.log('newCar object: ', newCar);

// const func = function(callback){
//     const name = "Sasha";
//     callback(name);
// };
// func(function(n) {
//     console.log("Hello " + n);
// });

// function increaseArg(a, b) {
//     if (a > b) {
//         return a * 2 + ' nice';
//     } else {
//         return a + b;
//     }
// }
// console.log(increaseArg(5, 10));

function fac(n) {
    let res = 1;
    for ( let i = 1; i < n; i++ ) {
        res *= i + 1;
    }
    return res;
}
console.log(fac(3));