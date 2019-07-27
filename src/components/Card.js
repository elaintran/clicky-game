import React from "react";

const cardDeck = [];
const easyDeck = [];

const createDeck = () => {
    for (let i = 2; i < 15; i++) {
        let card;
        if (i < 11) {
            card = i;
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
        cardDeck.push(card + "S");
        cardDeck.push(card + "C");
        cardDeck.push(card + "H");
        cardDeck.push(card + "D");
    }
    console.log(cardDeck);
}
createDeck();

const easyVer = () => {
    for (let j = 0; j < cardDeck.length; j++) {
        (cardDeck[j].substring(1) === "S" || cardDeck[j].substring(2) === "S") ? easyDeck.push(cardDeck[j]) : console.log("error");
    }
    console.log(easyDeck);
}

function Card() {
    return <h1>{cardDeck[0]}</h1>;
}

export default Card;