// capturing DOM elements
let cardsEl = document.getElementById('cards-el')
let sumEl = document.getElementById('sum-el')
let infoEl = document.getElementById('info-el')
let statusEl = document.getElementById('status-el')

// variable declarations
let firstCard = '';
let secondCard = '';
let sum = '';
let drawCard = '';
let message = '';
let isAlive = false
let blackjack = false
let randomCard = '';
let person = '';


person = {
    name: 'Charles',
    price: 45
}

statusEl.textContent = person.name + ' : ' + '$' + person.price;


// Conditional function
function conditional(){    
    if(sum < 21){
        message = 'You want to draw another card?'
    }else if(sum > 21){
        message = 'You are out of the game!'
    }else{
        message = 'You got a blackjack'
    }

    infoEl.textContent = message;
}
// start game function
function startGame(){
    randomCard = 
    firstCard = Math.floor(Math.random() * 21) + 1;
    secondCard = Math.floor(Math.random() * 21) + 1;
    cardsEl.textContent = "Cards : "+ firstCard + " " + secondCard;
    sum = firstCard + secondCard;
    sumEl.textContent = "Sum: "+ sum;
    conditional()
}

//draw new card function
function newCard(){

    if ( sum  > 21){
        return;
    }else{
        drawCard = Math.floor(Math.random() * 21) + 1;
    cardsEl.textContent +=' '+ drawCard;
    sum += drawCard;
    conditional()
    sumEl.textContent = "Sum: "+ sum;
    }

}