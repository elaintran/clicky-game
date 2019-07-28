import React from "react";
import Card from "./Card.js";
import "../styles/Gameboard.css";

//array containing all 52 cards
const deck = [];
//array containing 13 spade cards
const easyDeck = [];
const suite = ["Spade", "Clover", "Heart", "Diamond"];
//array storing all cards clicked
// const clickedDeck = [];

//appends suite to card value and push to array
const createDeck = () => {
    //i starts at 2 since cards begin at 2; total of 13 different values
    for (let i = 2; i < 15; i++) {
        let card;
        //assign i for all values 2-10
        if (i < 11) {
            card = i;
        //creates face cards for any values after 10
        } else {
            switch(i) {
                case 11:
                    card = "J";
                    break;
                case 12:
                    card = "Q";
                    break;
                case 13:
                    card = "K";
                    break;
                case 14:
                    card = "A";
                    break;
                default:
                    console.log("Error");
            }
        }
        //add all the suites and push into deck array
        for (let j = 0; j < suite.length; j++) {
            let deckObj = {};
            deckObj.number = card;
            deckObj.suite = suite[j];
            (suite[j] === "Spade" || suite[j] === "Clover") ? deckObj.color = "#252525" : deckObj.color = "#f54242";
            deck.push(deckObj);
        }
        //add only spade to the value and push to easy deck
        let easyDeckObj = {};
        easyDeckObj.number = card;
        easyDeckObj.suite = "Spade";
        easyDeckObj.color = "#252525";
        easyDeck.push(easyDeckObj);
    }
    console.log(deck);
    console.log(easyDeck);
}
createDeck();

// let cardDisplay = [];
// const gameboard = React.createElement("div", {"className": "gameboard"});

// const checkSuite = (suite) => {
//     if (suite === "S") {
//         return "Spade";
//     } else if (suite === "C") {
//         return "Clover";
//     } else if (suite === "D") {
//         return "Diamond";
//     } else if (suite === "Heart") {
//         return "Heart";
//     }
// }

// const game = () => {
//     //if clicked hard, generate deck arr
//     //if clicked easy, generate easy deck arr
//     while (cardDisplay.length !== 4) {
//         let randomCard = easyDeck[Math.floor(Math.random() * easyDeck.length)];
//         if (cardDisplay.indexOf(randomCard) === -1) {
//             cardDisplay.push(randomCard);
//         }
//     }
//     for (let i = 0; i < cardDisplay.length; i++) {
//         let suite;
//         (cardDisplay[i].substring(0, 2) === "10") ? suite = cardDisplay[i].substring(2, 3) : suite = cardDisplay[i].substring(1, 2);
//         let cardElement = React.createElement("Card", {suite: checkSuite(suite)});
//         // gameboard.appendChild(cardElement);
//         console.log(gameboard);
//     }
//     return gameboard;
// }
// game();

function Gameboard() {
    return (
        <div className="gameboard">
            {easyDeck.map(card => (
                <Card number={card.number} suite={card.suite} color={card.color}/>
            ))}
        </div>
    );
    // return {game};
}

export default Gameboard;