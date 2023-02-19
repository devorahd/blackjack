//ask player for name and use that. start with 400 chips, every game won add 200 chips and every lost reduce 50. save in localstorage for this?

let player = {
  name: "Devorah",
  chips: 165,
};

let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum === 1) {
    return 11;
  } else if (randomNum > 10) {
    return 10;
  } else {
    return randomNum;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: ";
  for (i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw another card?";
  } else if (sum === 21) {
    hasBlackjack = true;
    message = "You've got Blackjack!";
  } else {
    isAlive = false;
    message = "You're out of the game!";
  }

  messageEl.textContent = message;

  //cash out
  //console.log(message);
  //console.log(hasBlackjack);
  //console.log(isAlive);
}

function drawCard() {
  if (hasBlackjack === false && isAlive === true) {
    let thirdCard = getRandomCard();
    sum += thirdCard;
    cards.push(thirdCard);
    renderGame();
  }
}
