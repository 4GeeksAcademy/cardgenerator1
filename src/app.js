/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  button();
  cardGenerator();
};
function button() {
  let getNewCard = document.querySelector("#button");
  getNewCard.addEventListener("click", function() {
    cardGenerator();
  });
}
let cardGenerator = () => {
  let randomSuit = [":diamonds:", ":clubs:", ":hearts:", ":spades:"];
  let randomNumber = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "Q",
    "J",
    "A"
  ];
  let suit = randomSuit[Math.floor(Math.random() * randomSuit.length)];
  let number = randomNumber[Math.floor(Math.random() * randomNumber.length)];
  if (suit == ":hearts:" || suit == ":diamonds:") {
    document.querySelector("#icon").style.color = "red";
  } else {
    document.querySelector("#icon").style.color = "black";
  }
  document.querySelector("#top").innerHTML = suit;
  document.querySelector("#number").innerHTML = number;
  document.querySelector("#bottom").innerHTML = suit;
};
