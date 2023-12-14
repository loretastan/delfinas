
// Pirma uzduotis

console.log('Welcome to akmenai!')

class Kibiras1 {

    constructor() {
        this.akmenuKiekis = 0;
    }

    pridetiAkmeni() {
        this.akmenuKiekis++;
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
    }

    kiekPririnktaAkmenu() {
        console.log(this.akmenuKiekis);
    }

}

const kibiras = new Kibiras1();

//kibiras.pridetiAkmeni();
//kibiras.pridetiAkmeni();
//kibiras.pridetiAkmeni();
kibiras.pridetiDaugAkmenu(10);
kibiras.kiekPririnktaAkmenu();

console.log(kibiras);


//Antra uzduotis

console.log('Wlcome to pinige!');

//class pinigine {

//constructor() {

//this.popieriniaiPinigai = 0;
//this.metaliniaiPinigai = 0;
//}
//ideti(kiekis) {
// if (kiekis < 2) {
//     this.metaliniaiPinigai += kiekis;
// } else {
//    this.popieriniaiPinigai += kiekis;
//}
//}


//skaiciuoti() {
// console.log(this.popieriniaiPinigai + this.metaliniaiPinigai);
//}


//const pinigai = new pinigine();

//pinigai.ideti(15);
//pinigai.skaiciuoti();


//Trecia uzduotis

console.log('Troleibusas');

class Troleibusas {
    constructor() {
        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius += keleiviuSkaicius
    }

    islipa(keleiviuSkaicius) {
        if (keleiviuSkaicius > this.keleiviuSkaicius) {
            this.keleiviuSkaicius = 0;
        } else {
            this.keleiviuSkaicius -= keleiviuSkaicius
        }
    }

    vaziuoja() {
        if (this.keleiviuSkaicius == 0) {
            console.log('Vaziuoja tuscias');
        }
        console.log(this.keleiviuSkaicius);
    }
}

const trolis = new Troleibusas();

trolis.ilipa(60);
trolis.islipa(79);
trolis.vaziuoja();

//Sesta uzduotis

console.log('Pinigine');

class pinigine {

    constructor() {

        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
        this.monetos = 0;
        this.banknotai = 0;
    }

    ideti(kiekis) {
        if (kiekis <= 2) {
            this.metaliniaiPinigai += kiekis;
            this.monetos++
        } else {
            this.popieriniaiPinigai += kiekis;
            this.banknotai++
        }
    }

    skaiciuoti() {
        console.log('pinigai:', this.popieriniaiPinigai + this.metaliniaiPinigai, 'monetos:', this.monetos, 'banknotai: ', this.banknotai);
    }

    monetos() {
        console.log(this.monetos);
    }

    banknotai() {
        console.log(this.banknotai);
    }
}

const pinigai = new pinigine();

pinigai.ideti(15);
pinigai.ideti(1);
pinigai.ideti(2);
pinigai.ideti(3);
pinigai.ideti(4);
pinigai.skaiciuoti();


// 8. uzdavinys 

console.log('Stikline');

class stikline {
    constructor(turis) {
        this.turis = turis;
        this.kiekis = 0;
    }

    ipilti(kiekis) {
        if (kiekis + this.kiekis > this.turis) {
            this.kiekis = this.turis;
        } else {
            this.kiekis += kiekis;
        }

    }
    ispilti() {
        const temp = this.kiekis
        this.kiekis = 0;
        return temp;
    }

    stiklinejeYra() {

        //console.log(this.kiekis);
        return this.kiekis;
    }
}

//const pilam = new stikline(365);
const dusimtai = new stikline(200);
const simtasPem = new stikline(150);
const simtas = new stikline(100);

dusimtai.ipilti(200);
simtasPem.ipilti(dusimtai.stiklinejeYra());
simtasPem.stiklinejeYra();
dusimtai.stiklinejeYra();
simtas.ipilti(simtasPem.ispilti());
simtas.stiklinejeYra();
simtasPem.stiklinejeYra();

//simtas.ipilti(simtasPem.ipilti(dusimtai.ispilti()));
//console.log(dusimtai, simtasPem, simtas);


//pilam.ipilti(360);
//pilam.ispilti(4);
//pilam.ipilti(400);
//console.log(pilam)
//console.log(pilam.kiekis);





// Penktas uzdvinys

console.log('Welcome to milk shop!');

class PirkiniuKrepselis {
    constructor() {
        this.turinys = new Map();
    }

    idetiSureli(kiekis) {
        if (this.turinys.has('sureliai')) {
            this.turinys.set('sureliai', this.turinys.get('sureliai') + kiekis);
        } else {
            this.turinys.set('sureliai', kiekis);
        }
    }

    idetiPieno(kiekis) {
        if (this.turinys.has('pienas')) {
            this.turinys.set('pienas', this.turinys.get('pienas') + kiekis);
        } else {
            this.turinys.set('pienas', kiekis);
        }
    }

    idetiDuonos(kiekis) {
        if (this.turinys.has('duona')) {
            this.turinys.set('duona', this.turinys.get('duona') + kiekis);
        } else {
            this.turinys.set('duona', kiekis);
        }
    }

    krepselioTurinys() {
        console.log('Krepselio turinys:');
        for (const produktas of this.turinys) {
            console.log(`${produktas[0]}: ${produktas[1]}`);
        }
    }
}

const krepselis = new PirkiniuKrepselis();

krepselis.idetiSureli(2);
krepselis.idetiPieno(1);
krepselis.idetiDuonos(1);
krepselis.idetiPieno(3);

krepselis.krepselioTurinys();


// 9. uzdavinys

console.log('Sveiki, grybautojai!');

class Grybas {
    constructor() {
        this.svoris = this.rand(5, 45);
        this.valgomas = !this.rand(0, 1);
        this.sukirmijes = !this.rand(0, 1);
    }

    rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

class Krepsys {
    constructor() {
        this.dydis = 500;
        this.prikrauta = 0;
    }

    ideti(grybas) {
        if (grybas.valgomas && !grybas.sukirmijes) {
            this.prikrauta += grybas.svoris;
        }
        return this.dydis > this.prikrauta;
    }
}

const krepsys = new Krepsys();


while (krepsys.ideti(new Grybas)) { }

console.log(krepsys);