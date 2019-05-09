function identity(arg: number): number {
    return arg;
}

function identity1<T>(arg: T): T {
    return arg;
}

let output = identity1("myString");

/* 使用泛型变量 */
function identity2<T>(arg: Array<T>): Array<T> {
    console.log(arg.length)
    return arg;
}

interface GenericIdentityFn<T> {
    (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = identity

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal111 {
    numLegs: number;
}

class Bee extends Animal111 {
    keeper: BeeKeeper;
}

class Lion extends Animal111 {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal111>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!