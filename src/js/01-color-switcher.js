const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timer = null

startButton.addEventListener('click', startButtonClickHandler);
stopButton.addEventListener('click', stopButtonClickHandler);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function startButtonClickHandler() {
  timer = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    startButton.setAttribute('disabled', 'true');
    stopButton.removeAttribute('disabled');
  }, 1000);
}

function stopButtonClickHandler() {
  clearInterval(timer);
  startButton.removeAttribute('disabled');
  stopButton.disabled = true;
}