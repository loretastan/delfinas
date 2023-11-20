function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("1.salyga");

let kauliukas1 = Math.floor(Math.random(1, 6) * 6) + 1;
let kauliukas2 = Math.floor(Math.random(1, 6) * 6) + 1;

let suma = kauliukas1 + kauliukas2;
let B = 7;

if (suma > B) {
  console.log(`Kauliuku suma: ${suma}. Laimejote!`);
} else {
  console.log(`Kauliuku suma: ${suma}. Pralaimejote.`);
}

console.log("2.salyga");

let pilkiosvoris = Math.floor(Math.random(3, 6) * 4) + 3;
let murkliosvoris = Math.floor(Math.random(3, 6) * 4) + 3;

//katinuku svoriai

console.log(`Pilkis sveria ${pilkiosvoris} kg.`);
console.log(`Murklys sveria ${murkliosvoris} kg.`);

// palyginamas katinuku svoris

if (pilkiosvoris < murkliosvoris) {
  console.log(`Lengvesnis katinukas yra Pilkis.`);
} else if (murkliosvoris < pilkiosvoris) {
  console.log(`Lengvesnis katinukas yra Murklys.`);
} else {
  console.log(
    `Katinuku svoriai vienodi: Pilkis sveria ${pilkiosvoris} kg, Murklys sveria ${murkliosvoris} kg.`
  );
}

console.log("3.salyga");

// Atsitiktiniai skaiciai karvems ir katinukams

let katinukuskaicius = Math.floor(Math.random(0, 30) * 31);
let karviuskaicius = Math.floor(Math.random(0, 30) * 31);

// Riba

let talpumoriba = 15;

// Ateja katinukai ir karves

console.log(`Atejo ${katinukuskaicius} katinukai ir ${karviuskaicius} karves.`);

// ar telpa i valtis

if (katinukuskaicius <= talpumoriba && karviuskaicius <= talpumoriba) {
  console.log("Telpa");
} else {
  console.log("Netelpa");
}

console.log("4.salyga");

let ridenimas = Math.floor(Math.random(1, 6) * 6) + 1;

console.log(`Kauliukas parode: ${ridenimas}`);

if (ridenimas === 1 || ridenimas === 5) {
  console.log("Pirkti televizoriu.");
} else if (ridenimas === 3 || ridenimas === 4) {
  console.log("Pirkti skalbimo masina.");
} else if (ridenimas === 2 || ridenimas === 6) {
  console.log("Pirkti saldytuva.");
}

console.log("5.salyga");

let skaicius1 = Math.floor(Math.random(1, 7) * 7) + 1;
let skaicius2 = Math.floor(Math.random(1, 7) * 7) + 1;
let skaicius3 = Math.floor(Math.random(1, 7) * 7) + 1;

let skaiciai = [skaicius1, skaicius2, skaicius3];

skaiciai.sort(function (a, b) {
  return a - b;
});

console.log(skaiciai.join(" "));
