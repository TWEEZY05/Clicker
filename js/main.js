let textGame = document.getElementById('text2');

let clickButton = document.querySelector('.button');


let timesLeft = document.querySelector('.times-left');



let counter = 0;

clickButton.addEventListener('click', () => {
    
    if (counter === 0) {
        setTimeout(timeIsOut, 5000);
    }

    counter++

    textGame.textContent = `${counter}!`;

});
  


function timeIsOut() {
    alert(`TIME IS END! YOUR SCORE = ${counter}! \nNICE ONE!`);

        counter = 0;
        
        textGame.textContent = `${counter}!`; 
};

