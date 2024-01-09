import React, { useState, useEffect } from 'react';
import './App.css';

const Timer = () => {
    const initialSeconds = 5 * 60;
    const [seconds, setSeconds] = useState(initialSeconds);
    const [inputSeconds, setInputSeconds] = useState(initialSeconds); // Naujas state laukas laikui įvesti
    const [isRunning, setIsRunning] = useState(false);

    const updateTimer = () => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };

    useEffect(() => {
        let timerInterval;

        if (isRunning) {
            timerInterval = setInterval(() => {
                if (seconds <= 10) {
                    playSound();
                    showPopup();
                }

                if (seconds === 0) {
                    clearInterval(timerInterval);
                    setIsRunning(false);
                    alert('Laikas baigėsi!');
                } else {
                    setSeconds((prevSeconds) => prevSeconds - 1);
                }
            }, 1000);
        }

        return () => clearInterval(timerInterval);
    }, [seconds, isRunning]);

    const playSound = () => {
        const audioElement = new Audio('sound.mp3');
        audioElement.play();
    };

    const showPopup = () => {
        // Logika rodyti pop-up
    };

    const handleStart = () => {
        setSeconds(inputSeconds); // Naujas: Pradedame nuo įvesto laiko
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setSeconds(initialSeconds);
    };

    const handleInputChange = (event) => {
        const inputValue = parseInt(event.target.value, 10);
        setInputSeconds(isNaN(inputValue) ? 0 : inputValue); // Naujas: Saugome įvestą laiką
    };

    return (
        <div id="timer-container">
            <div id="timer-frame"></div>
            <div id="timer">{updateTimer()}</div>
            <div>
                <input
                    type="number"
                    placeholder="Laikas (sekundėmis)"
                    value={inputSeconds}
                    onChange={handleInputChange}
                    disabled={isRunning}
                />
                <button onClick={handleStart} disabled={isRunning}>
                    Start
                </button>
                <button onClick={handleStop} disabled={!isRunning}>
                    Stop
                </button>
                <button onClick={handleReset}>
                    Nustatyti iš naujo
                </button>
            </div>
        </div>
    );
};

export default Timer;
