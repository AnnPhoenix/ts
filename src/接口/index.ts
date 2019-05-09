function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label)
}

let myObj = { size: 10, label: "Size 10 object" };
printLabel(myObj);

interface LabelledValue {
    label: string;
}

/* 可选属性 */
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }

    if (config.width) {
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

let mySquare = createSquare({ color: "black" });
console.log(JSON.stringify(mySquare));

/* 只读属性 */
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5;

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12;
// ro.push(5);
// ro.length = 100;
// a = ro;
a[0] = 11;
a = ro as number[];
console.log(a)
console.log(ro)

/* 额外的属性检查 */
let mySquare1 = createSquare({ colour: "red", width: 100 });

/* 函数类型 */
interface SearchFunc {
    (source: string, substring: string): boolean;
}

let mySearch: SearchFunc;
mySearch = (source: string, substring: string) => {
    let result = source.search(substring);
    return result > -1;
}

mySearch = (src: string, sub: string) => {
    let result = src.search(sub);
    return result > -1;
}

mySearch = (src, sub) => {
    let result = src.search(sub);
    return result > -1;
}

mySearch = () => {
    return true;
}

mySearch("1", "2")

/* 可索引的类型 */
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[1];

class Animal {
    name: string;
}

class Dog extends Animal {
    breed: string;
}

// number索引的返回值必须是string索引返回值类型的子类型
interface NotOkay {
    [x: number]: Dog;
    [x: string]: Animal;
}

// interface NumberDictionary {
//     [index: string]: number;
//     length: number;
//     name: string;
// }

// interface ReadonlyStringArray {
//     readonly [index: number]: string;
// }

// let myArray1: ReadonlyStringArray = ["Alice", "Bob"];
// myArray1[2] = "Lucie";

// /* 类类型 */
// interface ClockInterface {
//     currentTime: Date;
// }

// class Clock implements ClockInterface {
//     currentTime: Date;
//     currentTime1: Date;
//     constructor(h: number, m: number) { }
// }

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock1 implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

/* 类静态部分与实例部分的区别 */
interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface2;
}

interface ClockInterface2 {
    tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface2 {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface2 {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep")
    }
}

/* 继承接口 */
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;

/* 混合类型 */
// 一个对象同时作为函数和对象使用, 并带有额外的属性
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c1 = getCounter();
c1(10);
c1.reset();
c1.interval = 5.0;

/* 接口继承类 */
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() {
        return 1
    }
}

// class Image1 implements SelectableControl {
//     private state: any;
//     constructor(state: number) { }
//     select() { }
// }