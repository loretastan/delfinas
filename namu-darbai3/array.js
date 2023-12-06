console.log('1. Salyga!');

const masyvas =[];

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 30; i++) {
    masyvas.push(rand(5, 25));
}

console.log(masyvas);

// variantas 2.salyga A

const variantasA = (masyvas.lenth / 2) + (masyvas.lenth / 2 - 1);
console.log(variantasA);

const variantasB = 0;

for (let i = 0; i < 30; i++) {
    if ( i % 2 === 0 && i !== 0) variantasB += masyvas[i];
}

console.log(variantasB);
