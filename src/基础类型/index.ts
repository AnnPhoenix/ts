/* 布尔值 */
let isDone: boolean = false;

/* 数字 */
let dec: number = 6;
let hex: number = 0xf00d;
let bin: number = 0b1010;
let oc: number = 0o744;

/* 字符串 */
let name1: string = "bob";
name1 = "smith";

let name2: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${name2}`;
sentence = "Hello, my name is " + name2 + ".\n\n" + "I'll be " + (age + 1) + " years old next month."

/* 数组 */
let list: Array<number> = [1, 2, 3]
let list2: number[] = [2, 3, 4]

/* 元祖 */
let x: [string, number];
x = ['hello', 10];
// x = [10, 'hello'];
console.log(x[0].substr(1))
// console.log(x[1].substr(1))
// x[3] = undefined;

/* 枚举 */
enum Color { Red, Green, Blue };
let c: Color = Color.Red;
let colorName: string = Color[2];
console.log(colorName);

/* Any */
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
notSure.isItExists();

// let prettySure: Object = 4;
// prettySure.toFixed();

let list3: any[] = [1, true, "free"];
list3[1] = 100;

/* Void */
function warnUser(): void {
    console.log("This is my warning message");
}

let unusable: void = undefined;
let unusable1: void = null;
// let unusable2: void = 1;

/* Null Undefined */
// undefined和null是所有类型的子类型
let u: undefined = undefined;
let n: null = null;
let num1: number = 2;
num1 = n;

/* Never */
// 没有返回值, 或抛出异常
function error(message: string): never {
    throw new Error(message);
}
// function error1(message: string): never {
//     return 1;
// }

/* Object */
// 除number string boolean symbol null undefined之外的类型
declare function create(o: object | null): void;
create({ prop: 0 });
create(null);
create(undefined);
// create(42);

/* 类型断言 */
// 尖括号
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// as
let strLength2: number = (someValue as string).length;