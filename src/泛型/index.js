function identity(arg) {
    return arg;
}
function identity1(arg) {
    return arg;
}
let output = identity1("myString");
/* 使用泛型变量 */
function identity2(arg) {
    console.log(arg.length);
    return arg;
}
let myIdentity = identity;
class BeeKeeper {
}
class ZooKeeper {
}
class Animal111 {
}
class Bee extends Animal111 {
}
class Lion extends Animal111 {
}
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag; // typechecks!
createInstance(Bee).keeper.hasMask; // typechecks!
//# sourceMappingURL=index.js.map