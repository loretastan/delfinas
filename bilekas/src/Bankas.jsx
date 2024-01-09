import React, { useState, useEffect } from 'react';
import './App.scss';

function App() {
    const [saskaitos, setSaskaitos] = useState([]);
    const [vardas, setVardas] = useState('');
    const [pavarde, setPavarde] = useState('');

    // Funkcija, kuri išsaugo sąskaitas į Local Storage
    const saugotiISaskaitasLocalStorage = (saskaitos) => {
        localStorage.setItem('saskaitos', JSON.stringify(saskaitos));
    };

    // Funkcija, kuri įkelia sąskaitas iš Local Storage puslapio įkrovimo metu
    const gautiSaskaitasIsLocalStorage = () => {
        const saugomosSaskaitos = localStorage.getItem('saskaitos');
        if (saugomosSaskaitos) {
            setSaskaitos(JSON.parse(saugomosSaskaitos));
        }
    };

    useEffect(() => {
        gautiSaskaitasIsLocalStorage();
    }, []);

    const sukurtiSaskaita = () => {
        if (vardas && pavarde) {
            const naujaSaskaita = {
                vardas: vardas,
                pavarde: pavarde,
                suma: 0
            };

            setSaskaitos([...saskaitos, naujaSaskaita]);
            setVardas('');
            setPavarde('');

            saugotiISaskaitasLocalStorage([...saskaitos, naujaSaskaita]);
        } else {
            alert('Įveskite vardą ir pavardę!');
        }
    };

    const pridetiLesas = (saskaita) => {
        const suma = prompt('Įveskite sumą:');
        if (isFinite(suma) && parseFloat(suma) > 0) {
            saskaita.suma += parseFloat(suma);
            setSaskaitos([...saskaitos]);
            saugotiISaskaitasLocalStorage([...saskaitos]);
            alert('Lėšos pridėtos sėkmingai!');
        } else {
            alert('Neteisinga suma!');
        }
    };

    const nuskaiciuotiLesas = (saskaita) => {
        const suma = prompt('Įveskite sumą:');
        if (isFinite(suma) && parseFloat(suma) > 0 && parseFloat(suma) <= saskaita.suma) {
            saskaita.suma -= parseFloat(suma);
            setSaskaitos([...saskaitos]);
            saugotiISaskaitasLocalStorage([...saskaitos]);
            alert('Lėšos nuskaičiuotos sėkmingai!');
        } else {
            alert('Neteisinga suma arba nepakankamai lėšų!');
        }
    };

    const istrintiSaskaita = (saskaita) => {
        const patvirtinimas = window.confirm('Ar tikrai norite ištrinti šią sąskaitą?');
        if (patvirtinimas) {
            setSaskaitos(saskaitos.filter(s => s !== saskaita));
            saugotiISaskaitasLocalStorage(saskaitos.filter(s => s !== saskaita));
            alert('Sąskaita ištrinta sėkmingai!');
        }
    };

    return (
        <div className="App">
            <h1>Bankas</h1>

            <h2>Nauja sąskaita</h2>
            <label htmlFor="vardas">Vardas:</label>
            <input type="text" id="vardas" value={vardas} onChange={(e) => setVardas(e.target.value)} />
            <label htmlFor="pavarde">Pavardė:</label>
            <input type="text" id="pavarde" value={pavarde} onChange={(e) => setPavarde(e.target.value)} />
            <button onClick={sukurtiSaskaita}>Sukurti sąskaitą</button>

            <h2>Sąskaitų sąrašas</h2>
            <table>
                <thead>
                    <tr>
                        <th>Vardas</th>
                        <th>Pavardė</th>
                        <th>Sąskaitos suma</th>
                        <th>Veiksmai</th>
                    </tr>
                </thead>
                <tbody>
                    {saskaitos.map((saskaita, index) => (
                        <tr key={index}>
                            <td>{saskaita.vardas}</td>
                            <td>{saskaita.pavarde}</td>
                            <td>{saskaita.suma}</td>
                            <td>
                                <button onClick={() => pridetiLesas(saskaita)}>Pridėti lėšų</button>
                                <button onClick={() => nuskaiciuotiLesas(saskaita)}>Nuskaičiuoti lėšas</button>
                                <button onClick={() => istrintiSaskaita(saskaita)}>Ištrinti</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
