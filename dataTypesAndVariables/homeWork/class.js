class Task {
    constructor(title = '', isCompleted = false) {
        this.title = title,
        this.isCompleted = false
    }
}

let task = new Task('Learn ES6', false);
let task2 = new Task('Learn ReactJS', true);

console.log(task2);