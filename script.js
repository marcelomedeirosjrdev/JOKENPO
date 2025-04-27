const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

const myScore = document.querySelector('#my-score')

const button = document.querySelectorAll('button')



button.forEach(element => {

    element.addEventListener('click', function(){

        if (rock !== paper !== scissors){
        
        }
        console.log('voce clicou', element.id)
    })
    
});
