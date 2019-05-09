enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let c22: Circle = {
    kind: ShapeKind.Circle,
    //    ~~~~~~~~~~~~~~~~ Error!
    radius: 100,
}

enum E {
    Foo,
    Bar,
}

// function f(x: E) {
//     if (x !== E.Foo || x !== E.Bar) {
//         //             ~~~~~~~~~~~
//         // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
//     }
// }

enum E123 {
    X, Y, Z
}

function f123(obj: { X: number }) {
    return obj.X;
}

// Works, since 'E' has a property named 'X' which is a number.
f123(E123);

enum FileAccess {
    // constant members
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
    // computed member
    G = "123".length
}

declare enum Enum {
    A = 1,
    B,
    C = 2
}

enum Enum {
    A1 = "AAA",
    B2 = "BBB"
}

let enum123 = [Enum.A1, Enum.B2]
let enum1231 = [Enum.A, Enum.B, Enum.C]