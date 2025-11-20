
const box = document.getElementById('box');
const startBtn = document.getElementById('start');
const resultEl = document.getElementById('result');
const avgEl = document.getElementById('avg');
let waiting = false;
let startTime = 0;
let timeoutId = null;
let times = [];

    function startRound() {
        box.style.background = "#facc15";
        box.textContent = "Get Ready...";
        box.style.color = "#333";
        resultEl.textContent = "—";

        waiting = true;

        const delay = 1000 + Math.random() * 2000;

        timeoutId = setTimeout(() => {
            box.style.background = "#22c55e";
            box.textContent = "CLICK HERE!";
            box.style.color = "white";
            startTime = Date.now();
            waiting = false;
        }, delay);
    }

    function resetBox() {
        clearTimeout(timeoutId);
        box.style.background = "#d3d3d3";
        box.textContent = "Click Start";
        box.style.color = "#333";
    }

    box.addEventListener("click", () => {
        if (startTime) {
            const reactionTime = Date.now() - startTime;
            times.push(reactionTime);
            resultEl.textContent = reactionTime;

            const avg = Math.round(times.reduce((a, b) => a + b) / times.length);
            avgEl.textContent = avg;

            resetBox();
            startTime = 0;
        } 
        else if (waiting) {
            resetBox();
            box.style.background = "#ef4444";
            box.textContent = "Too Soon!";
            box.style.color = "white";
            waiting = false;
        }
    });

startBtn.addEventListener("click", startRound);