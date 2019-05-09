/* 布尔值 */
let isDone = false;
/* 数字 */
let dec = 6;
let hex = 0xf00d;
let bin = 0b1010;
let oc = 0o744;
/* 字符串 */
let name1 = "bob";
name1 = "smith";
let name2 = `Gene`;
let age = 37;
let sentence = `Hello, my name is ${name2}`;
sentence = "Hello, my name is " + name2 + ".\n\n" + "I'll be " + (age + 1) + " years old next month.";
/* 数组 */
let list = [1, 2, 3];
let list2 = [2, 3, 4];
/* 元祖 */
let x;
x = ['hello', 10];
// x = [10, 'hello'];
console.log(x[0].substr(1));
// console.log(x[1].substr(1))
// x[3] = undefined;
/* 枚举 */
var Color;
// console.log(x[1].substr(1))
// x[3] = undefined;
/* 枚举 */
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let c = Color.Red;
let colorName = Color[2];
console.log(colorName);
/* Any */
let notSure = 4;
notSure = "maybe a string instead";
notSure = false;
notSure.isItExists();
// let prettySure: Object = 4;
// prettySure.toFixed();
let list3 = [1, true, "free"];
list3[1] = 100;
/* Void */
function warnUser() {
    console.log("This is my warning message");
}
let unusable = undefined;
let unusable1 = null;
// let unusable2: void = 1;
/* Null Undefined */
// undefined和null是所有类型的子类型
let u = undefined;
let n = null;
let num1 = 2;
num1 = n;
/* Never */
// 没有返回值, 或抛出异常
function error(message) {
    throw new Error(message);
}
create({ prop: 0 });
create(null);
create(undefined);
// create(42);
/* 类型断言 */
// 尖括号
let someValue = "this is a string";
let strLength = someValue.length;
// as
let strLength2 = someValue.length;
//# sourceMappingURL=index.js.map