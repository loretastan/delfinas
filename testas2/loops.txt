function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log("1.salyga");

for (let ratas = 10; ratas >= 1; ratas--) {
  console.log(ratas);
}

console.log("2.salyga");

let bendrasatstumas = 0;
let bendrasLaikas = 0;

for (let ratas = 1; ratas <= 10; ratas++) {
  const greitis = rand(120, 220);
  const atstumas = greitis * 1;
  bendrasatstumas += atstumas;
  bendrasLaikas += 1;
}

const vidutinisGreitis = bendrasatstumas / bendrasLaikas;
console.log(`Bendras vidutinis greitis: ${vidutinisGreitis.toFixed(2)} km/h`);

console.log("3.salyga");

let likesKuras = 44;

for (let ratas = 1; ratas <= 10; ratas++) {
  const panaudotasKuras = rand(3, 6);
  likesKuras -= panaudotasKuras;

  if (likesKuras < 0) {
    console.log(
      `Automobilis nr.55 per daug sunaudojo kuro ir nebaige visu 10 ratu.`
    );
    break;
  }
  console.log(`Ratas ${ratas}: liko ${likesKuras} litru kuro.`);
}

if (likesKuras >= 0) {
  console.log(
    `Automobilis nr.55 sugebejo iveikti visus 10 ratu ir liko ${likesKuras} litru kuro.`
  );
}

console.log("4.salyga.");

let minGreitis = Infinity;

for (let ratas = 1; ratas <= 10; ratas++) {
  console.log(`Ratas ${ratas}:`);
  for (let posukis = 1; posukis <= 5; posukis++) {
    const greitis = rand(20, 120);
    console.log(`Posukis ${posukis}: Automobilio greitis - ${greitis} km/h`);
    if (greitis < minGreitis) {
      minGreitis = greitis;
    }
  }
}

console.log(
  `Maziausias greitis automobilio visuose posukiuose buvo: ${minGreitis} km/h`
);
