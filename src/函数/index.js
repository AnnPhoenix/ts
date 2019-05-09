function add(x, y) {
    return x + y;
}
let myAdd = add;
// myAdd has the full function type
let myAdd1 = function (x, y) { return x + y; };
// The parameters `x` and `y` have the type number
let myAdd2 = function (x, y) { return x + y; };
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
// let result1 = buildName("Bob");                  // error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result3 = buildName("Bob", "Adams");         // ah, just right
// function buildName1(firstName: string, lastName = "Smith") {
//     return firstName + " " + lastName;
// }
// let result11 = buildName1("Bob");                  // works correctly now, returns "Bob Smith"
// let result12 = buildName1("Bob", undefined);       // still works, also returns "Bob Smith"
// let result13 = buildName1("Bob", "Adams", "Sr.");  // error, too many parameters
// let result14 = buildName1("Bob", "Adams");         // ah, just right
function buildName2(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
let buildNameFun = buildName2;
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
alert("card: " + pickedCard.card + " of " + pickedCard.suit);
let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
let deck1 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
let cardPicker1 = deck.createCardPicker();
let pickedCard12 = cardPicker();
alert("card: " + pickedCard.card + " of " + pickedCard.suit);
class Handler {
    constructor() {
        this.onClickGood = (e) => { this.info = e.message; };
    }
}
//# sourceMappingURL=index.js.map