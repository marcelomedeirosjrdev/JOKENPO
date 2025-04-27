const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')


const button = document.querySelectorAll('button')

const myScore = document.querySelector('#my-score')
const machineScore = document.querySelector('#machine-score')



button.forEach(element => {

    element.addEventListener('click', function () {


        if (rock !== paper && scissors) {
        }
        else if (paper !== rock && scissors) {
        }
        else if (scissors !== rock && paper) {

        }
        else { 'Deu empate!' }

        let machineChoice = Math.floor(Math.random(element.length) + 1)
        machineChoice = machineScore

        console.log('voce clicou', element.id)
        console.log(machineChoice)

    })

});
