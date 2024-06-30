let firstcard = randomcard()
let secondcard = randomcard()
let card = [firstcard,secondcard]
let sum = firstcard + secondcard
let blackjack = false
let alive = false
let message = ""
let messagEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let player = {
    name:"Arjun",
    chip:800
}

let plaerEl = document.getElementById("player-el")

plaerEl.textContent = player.name + " : $" + player.chip

function randomcard() {
    let num = Math.floor(Math.random() * 13) + 1
   if (num === 1){
    num = 11
    return num
   }
   else if (num > 10){
    num = 10
    return num
   }
   return num
}


function startgame(){
    let firstcard = randomcard()
    let secondcard = randomcard()
    let card = [firstcard,secondcard]
    let sum = firstcard + secondcard
    rendergame()
}

function rendergame(){

    cardEl.textContent = "card: " 

    for ( let i = 0; i < card.length; i++){
        cardEl.textContent += card[i] + " "
    }

    if(sum <= 20){
       message = "you want to draw a new card"
       sumEl.textContent = "sum: " + sum
       alive = true
    }
    
    else if(sum === 21){
        message = "you win the game"
        blackjack = true
        sumEl.textContent = "sum: " + sum
    }
    
    else{
       message = "you loss the game"
        alive = false
        sumEl.textContent = "sum: " + sum
    }
    messagEl.textContent = message
}


function newcard(){
    if ( alive === true){
            let thirdecard = randomcard()
            sum += thirdecard
            card.push(thirdecard)
            rendergame()
     }
 }  



































































