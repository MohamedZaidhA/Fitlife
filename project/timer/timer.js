
let timer;
let seconds = 0;

function updateTimerDisplay() {
  const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');
  document.getElementById('timer-display').textContent = `${mins}:${secs}`;
}

function startTimer() {
  if (!timer) {
    timer = setInterval(() => {
      seconds++;
      updateTimerDisplay();
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  updateTimerDisplay();
}
