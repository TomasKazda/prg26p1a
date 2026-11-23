//konstrukce v TypeScript

//podmínky
let number = 10;
if (number > 5) {
    console.log("Number is greater than 5");
} else {
    console.log("Number is 5 or less");
}

//while cyklus
let j = 0;
while (j < 5) {
    console.log(`While iteration ${j}`);
    j += 1;
}

//cykly
for (let i = 0; i < 5; i += 1) {
    console.log(`Iteration ${i}`);
}

//do while cyklus
let k = 0;
do {
    console.log(`Do while iteration ${k}`);
    k += 1;
} while (k < 5);


//switch konstrukce
let fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("It's an apple");
        break;
    case "banana":
        console.log("It's a banana");
        break;
    default:
        console.log("Unknown fruit");
}

