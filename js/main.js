let textGame = document.getElementById("text2");

let clickButton = document.querySelector(".button");

let timesLeft = document.querySelector(".times-left");

let counter = 0;

let timer;

function initTimer(maxTime) {
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      return (timesLeft.textContent = `У Вас Осталось ${maxTime} Секунд`);
    } else if (maxTime === 0) {
      clearInterval(timer);
      timesLeft.textContent = `У Вас Осталось ${maxTime} Секунд`;
      resetSec()
    }
  }, 1000);
}

clickButton.addEventListener("click", () => {
  if (counter === 0) {
    initTimer(5);
    setTimeout(timeIsOut, 5000);
  }

  counter++;

  textGame.textContent = `${counter}!`;
});

function timeIsOut() {
  alert(`TIME IS END! YOUR SCORE = ${counter}!
NICE ONE!`);

  counter = 0;

  textGame.textContent = `${counter}!`;
  
}
function resetSec() {
  timesLeft.textContent = `У Вас Осталось 5 Секунд`;
}