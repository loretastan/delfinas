const x = 100;

// funkcijosvardas(x);

function funkcijosvardas(iksas) {
  console.log("pirma funkcija", iksas);
}

const y = 3434;
// if (true) naujaFunkcija()
const naujaFunkcija = function (kaipnors) {
  funkcijosvardas(x);
  console.log("antra funkcija", kaipnors);
};
//naujaFunkcija(x)

//arrow function
const arrowFunkcija = (nezinau) => console.log("trecia funkcija", nezinau);

//arrowFunkcija(x)

const lyginiaiNelyginiai = function (skaicius) {
  if (skaicius % 2 === 0) console.log(skaicius, "Skaicius yra lyginis");
  else console.log(skaicius, "Skaicius yra nelyginis");
};
lyginiaiNelyginiai(1);
lyginiaiNelyginiai(2);
lyginiaiNelyginiai(3);
lyginiaiNelyginiai(4);
lyginiaiNelyginiai(5);
lyginiaiNelyginiai(6);

const fizzBuzz = function () {
  const a = "Fizz"; // Fizz + Buzz = FizzBuzz
  const b = "Buzz";
  for (let i = 1; i <= 100; i++) {
    // console.log(i)
    if (i % 15 === 0) console.log(a + b);
    else if (i % 3 === 0) console.log(a);
    else if (i % 5 === 0) console.log(b);
    else console.log(i);
  }
};
fizzBuzz();
