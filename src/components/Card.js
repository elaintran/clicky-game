import React from "react";

const cards = [];

const test = () => {
    for (let i = 2; i < 15; i++) {
        if (i < 11) {
            cards.push(i + "S");
            cards.push(i + "C");
            cards.push(i + "H");
            cards.push(i + "D");
        } else {
            let faceCard;
            switch(i) {
                case 11:
                    faceCard = "J";
                    break;
                case 12:
                    faceCard = "Q";
                    break;
                case 13:
                    faceCard = "K";
                    break;
                case 14:
                    faceCard = "A";
                    break;
                default:
                    console.log("hi");
            }
            cards.push(faceCard + "S")
            cards.push(faceCard + "C");
            cards.push(faceCard + "H");
            cards.push(faceCard + "D");
        }
    }
    console.log(cards);
}
test();

function Card() {

    return <h1>{cards[0]}</h1>;
}

export default Card;