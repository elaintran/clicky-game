import React from "react";

const cardArr = [];

const test = () => {
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
        cardArr.push(card + "S");
        cardArr.push(card + "C");
        cardArr.push(card + "H");
        cardArr.push(card + "D");
    }
    console.log(cardArr);
}
test();

function Card() {

    return <h1>{cardArr[0]}</h1>;
}

export default Card;