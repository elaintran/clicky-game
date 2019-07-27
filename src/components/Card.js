import React from "react";
import Number from "./Number.js";
import Spade from "./Spade.js";
import Clover from "./Clover.js";
import Heart from "./Heart.js";
import Diamond from "./Diamond.js";
import "../styles/Card.css";

//array containing all 52 cards
const deck = [];
//array containing 13 spade cards
const easyDeck = [];

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
        deck.push(card + "S");
        deck.push(card + "C");
        deck.push(card + "H");
        deck.push(card + "D");
        //add only spade to the value and push to easy deck
        easyDeck.push(card + "S");
    }
    console.log(deck);
    console.log(easyDeck);
}
createDeck();

function Card(props) {
    return (
        <div className="card">
            <Number color="#f54242" number="2" />
            <div className="card-suite">
                <Heart />
            </div>
        </div>
    );
}

export default Card;