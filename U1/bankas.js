// bankas.js

let saskaitos = [];

function sukurtiSaskaita() {
    const vardas = document.getElementById('vardas').value;
    const pavarde = document.getElementById('pavarde').value;

    if (vardas && pavarde) {
        const naujaSaskaita = {
            vardas: vardas,
            pavarde: pavarde,
            suma: 0
        };

        saskaitos.push(naujaSaskaita);

        atnaujintiSaskaituSarasa();

        document.getElementById('vardas').value = '';
        document.getElementById('pavarde').value = '';

        alert('Sąskaita sėkmingai sukurta!');
    } else {
        alert('Įveskite vardą ir pavardę!');
    }
}

function atnaujintiSaskaituSarasa() {
    const tbody = document.querySelector('#saskaitos tbody');

    tbody.innerHTML = '';

    saskaitos.sort((a, b) => a.pavarde.localeCompare(b.pavarde));

    for (let i = 0; i < saskaitos.length; i++) {
        const row = tbody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.textContent = saskaitos[i].vardas;
        cell2.textContent = saskaitos[i].pavarde;
        cell3.textContent = saskaitos[i].suma;

        const pridetiButton = document.createElement('button');
        pridetiButton.textContent = 'Pridėti lėšų';
        pridetiButton.onclick = () => pridetiLesas(saskaitos[i]);
        cell4.appendChild(pridetiButton);

        const nuskaiciuotiButton = document.createElement('button');
        nuskaiciuotiButton.textContent = 'Nuskaičiuoti lėšas';
        nuskaiciuotiButton.onclick = () => nuskaiciuotiLesas(saskaitos[i]);
        cell4.appendChild(nuskaiciuotiButton);

        const istrintiButton = document.createElement('button');
        istrintiButton.textContent = 'Ištrinti';
        istrintiButton.onclick = () => istrintiSaskaita(saskaitos[i]);
        cell4.appendChild(istrintiButton);
    }
}

function pridetiLesas(saskaita) {
    const suma = prompt('Įveskite sumą:');
    if (isFinite(suma) && parseFloat(suma) > 0) {
        saskaita.suma += parseFloat(suma);
        atnaujintiSaskaituSarasa();
        alert('Lėšos pridėtos sėkmingai!');
    } else {
        alert('Neteisinga suma!');
    }
}

function nuskaiciuotiLesas(saskaita) {
    const suma = prompt('Įveskite sumą:');
    if (isFinite(suma) && parseFloat(suma) > 0 && parseFloat(suma) <= saskaita.suma) {
        saskaita.suma -= parseFloat(suma);
        atnaujintiSaskaituSarasa();
        alert('Lėšos nuskaičiuotos sėkmingai!');
    } else {
        alert('Neteisinga suma arba nepakankamai lėšų!');
    }
}

function istrintiSaskaita(saskaita) {
    const patvirtinimas = confirm('Ar tikrai norite ištrinti šią sąskaitą?');
    if (patvirtinimas) {
        saskaitos = saskaitos.filter(s => s !== saskaita);
        atnaujintiSaskaituSarasa();
        alert('Sąskaita ištrinta sėkmingai!');
    }
}

// Įkelti sąskaitų sąrašą į puslapį
atnaujintiSaskaituSarasa();
