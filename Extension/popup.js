let countdown;
let startTime;

function startTimer(duration) {
    const endTime = new Date().getTime() + duration * 60000;
    startTime = new Date().getTime();

    countdown = setInterval(function () {
        const now = new Date().getTime();
        const timeLeft = endTime - now;

        if (timeLeft <= 0) {
            displayAlert();
            return;
        }

        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = minutes + 'm ' + seconds + 's';
    }, 1000);
}

function displayAlert() {
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML = "0m" + " 0s";
    document.getElementById('timeUp').innerHTML = 'Time is Up!';
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('startButton').addEventListener('click', function () {
        const time = parseFloat(document.getElementById('timerInput').value);
        clearInterval(countdown);
        if (!isNaN(time) && time > 0) {
            startTimer(time);
            document.getElementById('timeUp').innerHTML = '';
        }
        else {
            document.getElementById('countdown').innerHTML = 'Please enter a postitive value.';
            document.getElementById('timeUp').innerHTML = '';            
        }
    });
});

