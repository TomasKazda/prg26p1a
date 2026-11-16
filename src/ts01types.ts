//datové typy a proměnné v TypeScript

//deklarace proměnné a definice typu
let firstNumber: number; //"prázdná" proměnná s hodnotou undefined
let secondNumber = 42; //z čísla byl odvozen datový typ
let otherNumber: number = 13; //deklarace (s uvedením typu) + inicializace

secondNumber = 12;
console.log(secondNumber);

//deklarace konstanty
const firstConstant: number = 100; //deklarace a inicializace musí proběhnout zároveň

//základní datové typy
let oneNumber: number; //číslo celé nebo desetinné, kladné nebo záporné
let text: string; //řetězec znaků
let decision: boolean; //nabývá hodnoty *true* nebo *false*

decision = Boolean(55-55); //nula je *false*, jiné číslo je *true*
console.log(`decision is "${decision}"`);

oneNumber = 33;
text = "Ahoj 'světe'!";
text = "Ahoj \"světe\"!";
text = 'Hello "world"!';
text = `This number is ${oneNumber}`; // pravý alt + 7 --> `
text = "This number is " + oneNumber;

console.log(text);

//kolekce hodnot jednoho typu
let container: Array<string> = ["Ahoj světe", "Hello World"]; //kolekce více hodnot stejného typu
//let container: string[]
console.table(container)

//literal types - typ, který může nabývat jen konkrétních hodnot
type Fruit = "jablko" | "banán" | "pomeranč";

let fruits: Array<Fruit> = ["banán", "jablko", "banán", "banán", "jablko"];
console.table(fruits)

//typ pro objekty reprezentující ovoce v košíku
type Fruits = {
    type: Fruit,
    count: number
}
let basket: Array<Fruits> = [
    {
        type: "banán",
        count: 3
    },
    {
        type: "pomeranč",
        count: 2
    }
]
//přístup k jednotlivým položkám v košíku
let bananaCount = basket[0].count;

console.log(bananaCount)
console.table(basket)