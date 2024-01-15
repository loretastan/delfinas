// src/Bankas.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const Bankas = () => {
  const [saskaitos, setSaskaitos] = useState([]);
  const [vardas, setVardas] = useState('');
  const [pavarde, setPavarde] = useState('');
  const [suma, setSuma] = useState(0);
  const [naujaSuma, setNaujaSuma] = useState(0);

  const [selectedAction, setSelectedAction] = useState({});
  const [naujaSumaMap, setNaujaSumaMap] = useState({});

  const [popupMessage, setPopupMessage] = useState('');

  useEffect(() => {
    gautiSaskaitas();
  }, []);

  const gautiSaskaitas = async () => {
    try {
      const response = await axios.get('http://localhost:3001/saskaitos');
      setSaskaitos(response.data);
      const naujasSelectedAction = {};
      const naujasNaujaSumaMap = {};
      response.data.forEach((saskaita) => {
        naujasSelectedAction[saskaita.id] = 'prideti';
        naujasNaujaSumaMap[saskaita.id] = 0;
      });
      setSelectedAction(naujasSelectedAction);
      setNaujaSumaMap(naujasNaujaSumaMap);
    } catch (error) {
      console.error('Klaida gaunant sąskaitas:', error);
    }
  };

  const sukurtiNaujaSaskaita = async () => {
    try {
      await axios.post('http://localhost:3001/saskaitos', { vardas, pavarde, suma });
      gautiSaskaitas();
      setVardas('');
      setPavarde('');
      setSuma(0);
      setPopupMessage('Sąskaita sėkmingai pridėta.');
      setTimeout(() => setPopupMessage(''), 3000);
    } catch (error) {
      console.error('Klaida kuriant naują sąskaitą:', error);
    }
  };

  const redaguotiSaskaita = async (id) => {
    try {
      await axios.put(`http://localhost:3001/saskaitos/${id}`, {
        action: selectedAction[id],
        suma: naujaSumaMap[id],
      });
      gautiSaskaitas();
      setSelectedAction({ ...selectedAction, [id]: 'prideti' });
      setNaujaSumaMap({ ...naujaSumaMap, [id]: 0 });
      setPopupMessage('Operacija sėkminga.');
      setTimeout(() => setPopupMessage(''), 3000);
    } catch (error) {
      console.error('Klaida redaguojant sąskaitą:', error);
    }
  };

  const istrintiSaskaita = async (id) => {
    const patvirtinimas = window.confirm('Ar tikrai norite ištrinti šią sąskaitą?');
    if (patvirtinimas) {
      try {
        await axios.delete(`http://localhost:3001/saskaitos/${id}`);
        gautiSaskaitas();
        setPopupMessage('Sąskaita sėkmingai ištrinta.');
        setTimeout(() => setPopupMessage(''), 3000);
      } catch (error) {
        console.error('Klaida trinant sąskaitą:', error);
      }
    }
  };

  return (
    <div className="container">
      <h1 className="header">Bankas ver. 2</h1>
      <div className="section">
        <h2>Sukurti naują sąskaitą</h2>
        <div>
          <label htmlFor="vardas">Vardas:</label>
          <input type="text" id="vardas" value={vardas} onChange={(e) => setVardas(e.target.value)} />
        </div>
        <div>
          <label htmlFor="pavarde">Pavardė:</label>
          <input type="text" id="pavarde" value={pavarde} onChange={(e) => setPavarde(e.target.value)} />
        </div>
        <div>
          <label htmlFor="suma">Suma:</label>
          <input type="number" id="suma" value={suma} onChange={(e) => setSuma(Number(e.target.value))} />
        </div>
        <button className="button" onClick={sukurtiNaujaSaskaita}>Sukurti sąskaitą</button>
      </div>
      <div className="section">
        <h2>Sąskaitų sąrašas</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Vardas</th>
              <th>Pavardė</th>
              <th>Suma</th>
              <th>Veiksmai</th>
            </tr>
          </thead>
          <tbody>
            {saskaitos.map((saskaita) => (
              <tr key={saskaita.id}>
                <td>{saskaita.vardas}</td>
                <td>{saskaita.pavarde}</td>
                <td>{saskaita.suma}</td>
                <td>
                  <select
                    value={selectedAction[saskaita.id]}
                    onChange={(e) =>
                      setSelectedAction({
                        ...selectedAction,
                        [saskaita.id]: e.target.value,
                      })
                    }
                  >
                    <option value="prideti">Pridėti lėšų</option>
                    <option value="nuskaiciuoti">Nuskaičiuoti lėšas</option>
                  </select>
                  <input
                    type="number"
                    value={naujaSumaMap[saskaita.id]}
                    onChange={(e) =>
                      setNaujaSumaMap({
                        ...naujaSumaMap,
                        [saskaita.id]: Number(e.target.value),
                      })
                    }
                  />
                  <button
                    className="button"
                    onClick={() => redaguotiSaskaita(saskaita.id)}
                  >
                    Redaguoti
                  </button>
                  <button
                    className="button"
                    onClick={() => istrintiSaskaita(saskaita.id)}
                  >
                    Ištrinti
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Popup langas */}
      {popupMessage && (
        <div className="popup">
          <p>{popupMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Bankas;
