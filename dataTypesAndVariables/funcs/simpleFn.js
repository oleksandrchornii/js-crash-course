const Marvel = {
    yearCreation: 1939,
    mainCharacter: 'Spider Man',
    mainTeam: 'Avengers',
};

function extendObject(obj, field, value) {
    const newObj = Object.assign({}, obj);
    newObj[field] = value;

    return newObj;
}
const NewMarvel = extendObject(Marvel, 'mainVillain', 'Venom');

console.log('Marvel object: ', Marvel);
console.log('NewMarvel object: ', NewMarvel);