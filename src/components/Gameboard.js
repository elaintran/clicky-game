import React from "react";
import Card from "./Card.js";
import "../styles/Gameboard.css";

//array containing all 52 cards
const deck = [];
//array containing 13 spade cards
const easyDeck = [];
//arr of card suites
const suite = ["Spade", "Clover", "Heart", "Diamond"];

//function for appending card to each deck arr
const createCard = (number, suite, arr, key) => {
    let deckObj = {};
    deckObj.key = key;
    deckObj.number = number;
    deckObj.suite = suite;
    if (arr === deck) {
        (suite === "Spade" || suite === "Clover") ? deckObj.color = "#252525" : deckObj.color = "#f54242";
    } else {
        deckObj.color = "#252525";
    }
    arr.push(deckObj);
}

//appends suite to card value and push to array
const createDeck = () => {
    let key = 1;
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
            createCard(card, suite[j], deck, key++);
        }
        //add only spade to the value and push to easy deck
        createCard(card, "Spade", easyDeck, (i-1));
    }
    console.log(deck);
    console.log(easyDeck);
}
createDeck();

function Gameboard() {
    return (
        <div className="gameboard">
            {easyDeck.map(card => (
                <Card key={card.key} number={card.number} suite={card.suite} color={card.color}/>
            ))}
        </div>
    );
}

export default Gameboard;