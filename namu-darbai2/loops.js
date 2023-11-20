console.log("Namu darbai loops");
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("1.salyga");

// trys sveiki skaiciai intervale 5-25.
const num1 = 10;
const num2 = 15;
const num3 = 20;

// A. siu skaiciu suma

const sum = num1 + num2 + num3;

console.log(sum);

// B. Skaiciai sudedami i string tipo kintamaji

const numString = num1.toString() + num2.toString() + num3.toString();
console.log(numString);

// C. Skaiciai su tarpais

const spaceNumString =
  num1.toString() + " " + num2.toString() + " " + num3.toString();
console.log(spaceNumString);

// D. Gale prdeti triju skaiciu suma

const finalString = `${num1} ${num2} ${num3} ${sum}`;
console.log(finalString);

console.log("2.salyga");

let skaicius = Math.floor(Math.random(5, 10) * (10 - 5 + 1) + 5);
console.log(skaicius);

console.log("3.salyga");

let tekstas = "Labas";

for (let i = 0; i < 5; i++) {
  console.log("Labas");
}

console.log("4.salyga");

let tekstas2 = "Labas";

for (let i = 0; i < 7; i++) {
  console.log(tekstas2);
}

console.log("5.salyga");

for (let i = 0; i < skaicius; i++) {
  console.log(skaicius);
}

console.log("6.salyga");

if (skaicius > 7) {
  console.log(skaicius);
}

for (let i = 0; i < skaicius; i++) {
  if (skaicius > 7) {
    console.log(skaicius);
  }
}
