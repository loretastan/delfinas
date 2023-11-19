function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Namu darbai 1.salyga");

let digit1 = rand(0, 4);
let digit2 = rand(0, 4);

console.log(digit1, digit2);

console.log("jei salyga yra", digit1, digit2, "tai gaunasi");
let digit3 = digit1 / digit2 || digit2 / digit1;
if (digit1 > digit2 / digit2);
else if (digit2 > digit1 / digit1);

console.log("rezultatas", digit3);

console.log("Namu darbai 2.salyga");

let pirmasiskintamasis = rand(0, 25);
let antrasiskintamasis = rand(0, 25);
let treciasiskintamasis = rand(0, 25);

console.log(pirmasiskintamasis, antrasiskintamasis, treciasiskintamasis);

let viduriniskintamasis =
  (pirmasiskintamasis + antrasiskintamasis + treciasiskintamasis) / 3;

console.log("Vidurine reiksme: " + viduriniskintamasis);

console.log("Namu darbai 3.salyga");

let a = rand(1, 10);
let b = rand(1, 10);
let c = rand(1, 10);

// ar galima sudaryti trikampi

if (a + b > c && a + c > b && b + c > a) {
  console.log(`Galima sudayti trikampi su krastinemis: a=${a}, b=${b}, c=${c}`);
} else {
  console.log(
    `Negalima sudaryti trikampio su krastinemis: a=${a}, b=${b}, c=${c}`
  );
}

console.log("Namu darbai 4.salyga");

let skaicius1 = rand(0, 2);
let skaicius2 = rand(0, 2);
let skaicius3 = rand(0, 2);
let skaicius4 = rand(0, 2);

//suskaciuoju kiek yra nuliu, vienetu ir dvejetu

let nuliai = [skaicius1, skaicius2, skaicius3, skaicius4].filter(
  (x) => x === 0
).length;
let vienetai = [skaicius1, skaicius2, skaicius3, skaicius4].filter(
  (x) => x === 1
).length;
let dvejetai = [skaicius1, skaicius2, skaicius3, skaicius4].filter(
  (x) => x === 2
).length;

console.log("Nuliu kiekis:", nuliai);
console.log("Vienetu kiekis:", vienetai);
console.log("Dvejetu kiekis:", dvejetai);

console.log("Namu darbai 5.salyga");

function rand() {
  return Math.floor(Math.random() * 21) - 10;
}

for (let i = 0; i < 3; i++) {
  const number = rand();
  let symbol = "";
  if (number < 0) {
    symbol = "+";
  } else if (number > 0) {
    symbol = "-";
  } else {
    symbol = "*";
  }
  console.log(`${number} ${symbol}`);
}

console.log("Namu darbai 6.salyga");

// atsitiktinis zvakiu skaicius nuo 5 iki 3000

const zvakiukiekis = Math.floor(Math.random() * (3000 - 5 + 1)) + 5;

// kaina zvakes vienetui

const vntkaina = 1;

// bendra kaina

let bendrakaina = zvakiukiekis * vntkaina;

//nuolaida

if (bendrakaina > 1000 && bendrakaina <= 2000) {
  bendrakaina *= 0.97; // 3% nuolaida
} else if (bendrakaina > 2000) {
  bendrakaina *= 0.96; // 4% nuolaida
}

console.log(`Perkama ${zvakiukiekis} zvakiu uz ${bendrakaina.toFixed(2)} EUR.`);

console.log("Namu darbai 7.salyga");

let numeris1 = Math.floor(Math.random(0, 101) * 101);
let numeris2 = Math.floor(Math.random(0, 101) * 101);
let numeris3 = Math.floor(Math.random(0, 101) * 101);

let vidurkis = (numeris1 + numeris2 + numeris3) / 3;

// reiksmes pagal salyga

let filtruotiskaiciai = [numeris1, numeris2, numeris3].filter(
  (reiksme) => reiksme >= 10 && reiksme <= 90
);

// naujas aritmetinis vidurkis

let nvidurkis =
  filtruotiskaiciai.reduce((sum, value) => sum + value, 0) /
  filtruotiskaiciai.length;

console.log("Pradiniai skaiciai:", numeris1, numeris2, numeris3);
console.log("Pradinis aritmetinis vidurkis:", vidurkis.toFixed(2));
console.log("Filtruoti skaiciai:", filtruotiskaiciai);
console.log("Naujas aritmetinis vidurkis:", nvidurkis.toFixed(2));
