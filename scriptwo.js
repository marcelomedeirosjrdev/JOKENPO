const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const button = document.querySelectorAll('button');

const myScore = document.querySelector('#my-score');
const machineScore = document.querySelector('#machine-score');

let playerPoints = 0;
let machinePoints = 0;

const options = ['rock', 'paper', 'scissors'];

button.forEach(element => {
    element.addEventListener('click', function () {
        let playerChoice = element.id;

        // Sorteia a escolha da máquina
        let machineChoice = options[Math.floor(Math.random() * options.length)];

        console.log('Você clicou:', playerChoice);
        console.log('A máquina escolheu:', machineChoice);

        // Agora vamos comparar
        if (playerChoice === machineChoice) {
            console.log('Deu empate!');
        } else if (
            (playerChoice === 'rock' && machineChoice === 'scissors') ||
            (playerChoice === 'paper' && machineChoice === 'rock') ||
            (playerChoice === 'scissors' && machineChoice === 'paper')
        ) {
            console.log('Você ganhou!');
            playerPoints++;
        } else {
            console.log('A máquina ganhou!');
            machinePoints++;
        }

        // Atualiza os placares na tela
        myScore.textContent = playerPoints;
        machineScore.textContent = machinePoints;
    });
});