interface Named {
    name: string
}

class Person1 {
    name: string;
}

let p: Named;
p = new Person1();

class Animal22 {
    feet: number;
    constructor(name: string, numFeet: number) { }
}

class Size22 {
    feet: number;
    constructor(numFeet: number) { }
}

let a22: Animal22;
let s22: Size22;

a22 = s22;  // OK
s22 = a22;  // OK

a22.feet = 2