document.addEventListener('DOMContentLoaded', function () {
    const timerElement = document.getElementById('timer');
    const audioElement = document.getElementById('audio');
    const popupElement = document.getElementById('popup');
    const closeButton = document.getElementById('closeButton');

    let seconds = 5 * 60;

    function updateTimer() {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        timerElement.innerText = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    function playSound() {
        audioElement.play();
    }

    function showPopup() {
        popupElement.style.display = 'block';
    }

    function hidePopup() {
        popupElement.style.display = 'none';
    }

    function startTimer() {
        const timerInterval = setInterval(function () {
            if (seconds <= 10) {
                playSound();
                showPopup();
            }

            if (seconds === 0) {
                clearInterval(timerInterval);
                alert('Laikas baigėsi!');
            } else {
                seconds--;
                updateTimer();
            }
        }, 1000);
    }

    closeButton.addEventListener('click', function () {
        hidePopup();
    });

    startTimer();
});
