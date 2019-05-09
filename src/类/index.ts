class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return `Hello, ${this.greeting}`
    }
}

let greeter = new Greeter("World");
console.log(greeter.greet());

/* 继承 */
class Animal1 {
    public name: string;
    public constructor(theName: string) { this.name = theName }
    public move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`)
    }
}

class Snake extends Animal1 {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal1 {
    constructor(name: string) { super(name) }
    move(distanceInMeters = 5) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

class Dog1 extends Animal1 {
    constructor(name: string = "") { super(name) }
    bark() {
        console.log(`Woof! Woof!`);
    }
}

const dog = new Dog1();
dog.bark();
dog.move(10);
dog.bark();

let sam = new Snake("Sammy the Python");
let tom: Animal1 = new Horse("Tommy the Palomino");

sam.move()
tom.move(34)

/* 公共 私有与受保护的修饰符 */
// 默认为public
class Person {
    private pname: string;
    constructor(protected name: string) { }
}

class Employee extends Person {
    constructor(name: string, private department: string) {
        super(name)
        // this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误

// readonly修饰符
class Octopus {
    readonly name: string = "";
    readonly numberOfLegs: number = 8;
    constructor(theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.

/* 存取器 */
let pwd = "secret passcode";
class Employee1 {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (pwd && pwd == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!")
        }
    }
}

let employee = new Employee1();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName)
}

/* 静态属性 */
class Grid {
    static origin = { x: 0, y: 0 }
    calculateDistanceFromOrigin(point: { x: number, y: number }) {
        // calculateDistanceFromOrigin(point: { x: number; y: number; }) {
        let xDist = (point.x - Grid.origin.x)
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }

    constructor(public scale: number) { }
}

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
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter1.standardGreeting;
        }
    }
}

let greeter1: Greeter1;
greeter1 = new Greeter1();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter1 = Greeter1;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter1 = new greeterMaker();
console.log(greeter2.greet());
console.log(typeof Greeter1);


class Point1 {
    x1: number;
    y1: number;
}

interface Point3d1 extends Point1 {
    z: number;
}

let point3d: Point3d1 = {x1: 1, y1: 2, z: 3};

class SubPoint extends Point1 implements Point3d1 {
    z: number
}