var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
let c22 = {
    kind: ShapeKind.Circle,
    //    ~~~~~~~~~~~~~~~~ Error!
    radius: 100,
};
var E;
(function (E) {
    E[E["Foo"] = 0] = "Foo";
    E[E["Bar"] = 1] = "Bar";
})(E || (E = {}));
// function f(x: E) {
//     if (x !== E.Foo || x !== E.Bar) {
//         //             ~~~~~~~~~~~
//         // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
//     }
// }
var E123;
// function f(x: E) {
//     if (x !== E.Foo || x !== E.Bar) {
//         //             ~~~~~~~~~~~
//         // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
//     }
// }
(function (E123) {
    E123[E123["X"] = 0] = "X";
    E123[E123["Y"] = 1] = "Y";
    E123[E123["Z"] = 2] = "Z";
})(E123 || (E123 = {}));
function f123(obj) {
    return obj.X;
}
// Works, since 'E' has a property named 'X' which is a number.
f123(E123);
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
var Enum;
(function (Enum) {
    Enum["A1"] = "AAA";
    Enum["B2"] = "BBB";
})(Enum || (Enum = {}));
let enum123 = [Enum.A1, Enum.B2];
let enum1231 = [Enum.A, Enum.B, Enum.C];
//# sourceMappingURL=index.js.map