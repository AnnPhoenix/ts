function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 object" };
printLabel(myObj);
function createSquare(config) {
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
let p1 = { x: 10, y: 20 };
// p1.x = 5;
let a = [1, 2, 3, 4];
let ro = a;
// ro[0] = 12;
// ro.push(5);
// ro.length = 100;
// a = ro;
a[0] = 11;
a = ro;
console.log(a);
console.log(ro);
/* 额外的属性检查 */
let mySquare1 = createSquare({ colour: "red", width: 100 });
let mySearch;
mySearch = (source, substring) => {
    let result = source.search(substring);
    return result > -1;
};
mySearch = (src, sub) => {
    let result = src.search(sub);
    return result > -1;
};
mySearch = (src, sub) => {
    let result = src.search(sub);
    return result > -1;
};
mySearch = () => {
    return true;
};
mySearch("1", "2");
let myArray;
myArray = ["Bob", "Fred"];
let myStr = myArray[1];
class Animal {
}
class Dog extends Animal {
}
class Clock1 {
    setTime(d) {
        this.currentTime = d;
    }
    constructor(h, m) { }
}
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
class DigitalClock {
    constructor(h, m) { }
    tick() {
        console.log("beep beep");
    }
}
let square = {};
square.color = "blue";
square.sideLength = 10;
function getCounter() {
    let counter = function (start) { };
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
}
class Button extends Control {
    select() { }
}
class TextBox extends Control {
    select() {
        return 1;
    }
}
// class Image1 implements SelectableControl {
//     private state: any;
//     constructor(state: number) { }
//     select() { }
// }
//# sourceMappingURL=index.js.map