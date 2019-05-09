class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return `Hello, ${this.greeting}`;
    }
}
let greeter = new Greeter("World");
console.log(greeter.greet());
/* 继承 */
class Animal1 {
    constructor(theName) { this.name = theName; }
    move(distanceInMeters = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal1 {
    constructor(name) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Horse extends Animal1 {
    constructor(name) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
class Dog1 extends Animal1 {
    constructor(name = "") { super(name); }
    bark() {
        console.log(`Woof! Woof!`);
    }
}
const dog = new Dog1();
dog.bark();
dog.move(10);
dog.bark();
let sam = new Snake("Sammy the Python");
let tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
/* 公共 私有与受保护的修饰符 */
// 默认为public
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Employee extends Person {
    constructor(name, department) {
        super(name);
        this.department = department;
        // this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误
// readonly修饰符
class Octopus {
    constructor(theName) {
        this.name = "";
        this.numberOfLegs = 8;
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
/* 存取器 */
let pwd = "secret passcode";
class Employee1 {
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (pwd && pwd == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
let employee = new Employee1();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
/* 静态属性 */
class Grid {
    constructor(scale) {
        this.scale = scale;
    }
    calculateDistanceFromOrigin(point) {
        // calculateDistanceFromOrigin(point: { x: number; y: number; }) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}
Grid.origin = { x: 0, y: 0 };
// // 
// var aaa: { a: number, b: number } = { a: 1, c: 2 }
// var bbb: { a: number; b: number; } = { aa: 1, b: 2 }
// /* 抽象方法 */
// abstract class Animal2{
//     private abstract makeSound(): void;
//     move():void {
//         console.log("roaming the earch...")
//     }
// }
/* OTHER */
class Greeter1 {
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter1.standardGreeting;
        }
    }
}
Greeter1.standardGreeting = "Hello, there";
let greeter1;
greeter1 = new Greeter1();
console.log(greeter1.greet());
let greeterMaker = Greeter1;
greeterMaker.standardGreeting = "Hey there!";
let greeter2 = new greeterMaker();
console.log(greeter2.greet());
console.log(typeof Greeter1);
class Point1 {
}
let point3d = { x1: 1, y1: 2, z: 3 };
class SubPoint extends Point1 {
}
//# sourceMappingURL=index.js.map