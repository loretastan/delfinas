console.log("All about arrays ----------------");

const animals = [
  "Lion",
  "Racoon",
  "Monkey",
  "Cat",
  "Dog",
  "Bird",
  "Fish",
  "Turtle",
  "Snake",
];

animals[4] = "Frog";
animals.push("Elephent");
animals.push("Horse", "Cow", "Pig");
animals.unshift("Tiger", "Bear"); //reindex

animals.pop();
animals.pop();
animals.pop();

animals.shift(); // reindex
animals.shift(); // reindex

let animalsLine = "Animals: ";
for (let i = 0; i < animals.length; i++) {
  //console.log(animals[i]);
  animalsLine += animals[i] + " + ";
}

const animalsLine2 = "Animals" + animals.join(" + ");

console.log(animalsLine);
console.log(animalsLine2);

//for (let animal of animals) {
//console.log(animal);
//}

const printRed = (animal) => {
  console.log(`%c ${animal}`, "color: crimson");
};

//animals.forEach(animal => console.log(animal));
animals.forEach(printRed);

// animals.forEach(function (animal) {
//console.log(animal);
//})

const arr123 = [1, 2, -3, 1, -1];

let sum = 0;

arr123.forEach((num) => (sum += num));

let positivesSum = 0;
//arr123.forEach((num) => {
// if (num > 0) {
//   positivesSum += num;
// }
//});

// oneline

arr123.forEach((num) => (num > 0 ? (positivesSum += num) : false));

console.log(sum, positivesSum);

let unknownObj = null;

console.log(unknownObj, typeof unknownObj);

const farm = ["Cow", "Chicken", "Pig", "Cow", "Chicken", "Cow"];

//let cowsum = 0;
// /farm.forEach((animal) => {
// if (animal === "Cow") {
//   cowsum++;
//   }
//});

//console.log(cowsum);

let cowCount = 0;

let A = 5;
let B = 6;

A += B; // A = A + B;
console.log(A);

farm.forEach((animal) => (animal === "Cow" ? cowCount++ : false));

console.log(cowCount);

const superFarm = [
  { animal: "Cow", weight: 500 },
  { animal: "Chicken", weight: 3 },
  { animal: "Pig", weight: 100 },
  { animal: "Cow", weight: 400 },
  { animal: "Chicken", weight: 2 },
  { animal: "Cow", weight: 600 },
];

// karviu skaicius
let cowWeight = 0;
superFarm.forEach((animal) =>
  animal.animal === "Cow" ? (cowWeight += animal.weight) : false
);
console.log(cowWeight);

// visu gyvunu svori skaiciuojam
const allAnimalsWeight = {};

superFarm.forEach((a) => {
  if (allAnimalsWeight[a.animal] === undefined) {
    allAnimalsWeight[a.animal] = 0;
  }
  allAnimalsWeight[a.animal] += a.weight;
});

console.log(allAnimalsWeight);

const colors = ["red", "green", "yellow", "pink", "purple", "orange"];

let isBlack = false;
colors.forEach = (color) => (color === "black" ? (isBlack = true) : false);

let isPink = "NO";
colors.forEach((color) => color === "pink" && (isPink = "YES"));

console.log(isPink);

let isPink2 = "NO";

colors.forEach((color) => {
  if (color === "pink") {
    isPink2 = "YES";
  }
});

console.log(isPink2);

console.log(animals, animals.length);
