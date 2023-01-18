let total = 0;
let cardArr = []
let isAlive = false;
let hasBlackjack = false
display = document.getElementById("message-el");
sumEl = document.querySelector("#sum-el")
cards = document.getElementById("cards-el")
let Player = { name: "Aman", credit: 156 };

Playerdata = Player.name + " $" + Player.credit;
playerEl = document.getElementById("player-el");
playerEl.textContent = Playerdata

function getRandomcard() {
    let num = Math.random() * 13
    num = Math.floor(num) + 1
    if (num === 1) {
        return 11;
    } else if (num > 10) {
        return 10
    } else {
        return num
    }
}


function getCard() {
    let card = "";
    for (let i = 0; i < cardArr.length; i++) {
        card += cardArr[i] + " ";
    }
    return card;
}

function startGame() {
    let card1 = getRandomcard();
    let card2 = getRandomcard();
    cardArr = [card1, card2];
    total = card1 + card2;
    renderGame();
}

function renderGame() {
    let message = "";
    sumEl.innerText = "Sum : " + total;
    cards.textContent = "Cards: " + getCard();
    if (total <= 20) {
        isAlive = true
        message = "Want to draw a new card?"
    } else if (total === 21) {
        hasBlackjack = true;
        isAlive = false
        message = "You won!!!";
        Player.credit += 50;
        Playerdata = Player.name + " $" + Player.credit;
        playerEl.textContent = Playerdata
    } else {
        isAlive = false;
        message = "Better luck next time!";
        Player.credit -= 50;
        Playerdata = Player.name + " $" + Player.credit;
        playerEl.textContent = Playerdata
    }
    display.innerText = message;
}

function newCard() {
    if (isAlive == true && hasBlackjack == false) {
        let card = getRandomcard();
        total += card;
        cardArr.push(card);
        renderGame();
    }

}