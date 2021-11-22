// function Car(model) {
//     this.model = model;
    
//     this.getModel = () => this.model;
//     this.drive = () => console.log('Driving....');
// }
  
//   const BMW = new Car('BMW');
//   const Volvo = new Car('Volvo');
  
//   BMW.drive(); 
//   Volvo.drive(); 

// class TVShow {
//     constructor(name) {
//         this.name = name;
//     }
//     country() {
//         console.log('USA'); 
//     }
//     toString() {
//         return Object.getPrototypeOf(this).constructor.name;
//     }
// }

// class TVSeries extends TVShow {
//     constructor(name) {
//         super(name);
//     }

//     genre() {
//         console.log('Comedy');
//     }
// }

// class Film extends TVShow {
//     constructor(name) {
//         super(name);
//     }

//     genre() {
//         return console.log('Comedy');
//     }
// }

// const Friends = new TVSeries('Friends');
// Friends.genre(); 
// const DueDate = new Film('DueDate');
// DueDate.genre(); 

// const JoeRogan = new TVShow('SnoopDog');
// JoeRogan.country();

// class Car {
//     constructor(brand, color, model) {
//         this.brand = brand;
//         this.color = color;
//         this.model = model;
//     }

//     speed() {
//         console.log(this.name +  " 320 km/h");
//     }

//     country() {
//         console.log("Italy");
//     }

//     getColor() {
//         return this.color;
//     }
// }

// class OldCar extends Car {
//     constructor(name, color) {
//         super(name, color);
//     }

//     speed() {
//         console.log(this.name + ' it is not on the move');
//     }    
// }

// const Ferrari = new Car("Ferrari", "red");
// Ferrari.speed();

// const Fiat = new OldCar("Fiat", "yellow");
// Fiat.speed();
 
function Phone(model, color,) {
    this.model = model;
    this.color = color;
}
  
Phone.prototype.year = () => console.log("2022");

  
Phone.prototype.country = function () {
    console.log("China");
};
  
const Samsung = new Phone("Samsung", "white");
const Huawei = new Phone("Huawei", "yellow");
Samsung.year();