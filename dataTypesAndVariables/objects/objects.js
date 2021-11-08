const phone = {
    brand: 'Apple',
    model: 'Iphone 13 Pro',
    color: 'Yellow',
};

const car = {
    brand: 'Toyota',
    model: 'Supra',
    maxSpeed: 290,
};
car.brand = "Ferrari";
car.maxSpeed = 340;
delete car.model;

const pen = {
    producingСountry: 'Japan',
    color: 'Black',
};
pen.brand = "Pigma Micront";

const BreakingBad = {
    genre: 'Drama',
    yearCreation: 1994,
    mainСharacters: 'Walter White, Jesse Pinkman',
};
if (BreakingBad.yearCreation !== 2008) {
    BreakingBad.yearCreation = 2008;
}

Object.freeze(BreakingBad);

const boardGames = {
    fanny: true,
    gambling: true,
}

const Sequense = Object.assign({}, boardGames);
Sequense.maxPlayers = 6;
Sequense.minPlayers = 2;
Sequense.strategically = 'true';

// console.log(Sequense);

const ExplodingKittens = Object.assign({}, boardGames);
ExplodingKittens.yearCreation = 2015;
ExplodingKittens.timePlay = '15 - 30 min.';
ExplodingKittens.age = '7+';

console.log(ExplodingKittens);