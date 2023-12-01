console.log('1.salyga');

function spausdintiTeksta(tekstas) {
console.log(tekstas);
}
spausdintiTeksta('tekstas');

console.log('2.Salyga.');

function spausdintiTekstaKartus(tekstas, kartai) {
    for (let i = 0; i < kartai; i++) {
        console.log(tekstas);
    }
}
spausdintiTekstaKartus('Mano tekstas', 3);

console.log('4.Salyga');

function beLiekanos(n) {
    let dalijimai = 0;
    for (let i = 2; i < n; i++)
    if (n % i === 0) dalijimai++;
    return dalijimai;
}

let skaicius = 12;
let rezultatas = 
beLiekanos(skaicius);
console.log(`Skaicius ${skaicius} dalijasi be liekanos is ${rezultatas} sveiku skaiciu.`);

console.log('5.Salyga');

function skaiciaiBeLiekanos(n) {
    let dalijimai = 0;
    for (let i = 2; i < n; i++)
    if (n % i === 0) dalijimai++;
    return dalijimai; 
}

const arr = Array.from({ length: 100}, () => Math.floor(Math.random() * 45) + 33);

//arr.sort((a, b) => skaiciaiBeLiekanos(b) - skaiciaiBeLiekanos(a));

const arr1 = arr.sort((a, b) => {
    const dalijimaiA = skaiciaiBeLiekanos(a);
    const dalijimaiB = skaiciaiBeLiekanos(b);
    return dalijimaiA > dalijimaiB ? -1 : 1;
});

console.log(arr1)






