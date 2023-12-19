import React from 'react';
import './App.scss';
import LabasZuiki from './Components/REACT_BASE/LabasZuiki';
import VienasProps from './Components/REACT_BASE/VienasProps';
import ZebraiBebrai from './Components/REACT_BASE/ZebraiBebrai';
import DuProps from './Components/REACT_BASE/DuProps';
import TrysProps from './Components/REACT_BASE/TrysProps';

const App = () => {
    return (
        <div className='App'>
            <header className='App-header'>
                <LabasZuiki />

                <VienasProps text="Pavyzdys su vienu prop" />

                <ZebraiBebrai value={1} />

                <DuProps text1="Pirmas tekstas" text2="Antras tekstas" />

                <TrysProps text1="Tekstas 1" text2="Tekstas 2" color="green" />
            </header>
        </div>
    );
};

export default App;
