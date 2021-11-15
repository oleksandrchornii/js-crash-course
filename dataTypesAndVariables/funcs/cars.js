class car {
    constructor(model,type) {
        this.model = model;
        this.type = type;
    }
    description() {
        return "......" + this.model + "......" + this.type;
    }
}
const BMW = new car("BMW", "X7");
console.log(BMW.description());