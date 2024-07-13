import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'

const DiceRoll = () => {

    const [number, setNumber] = useState(1);
    const [numberTwo, setNumberTwo] = useState(1);

    const randomNum = () => {
        return Math.floor(Math.random() * 6) + 1;
    };

    const handleClick = () => {
        setNumber(randomNum);
        setNumberTwo(randomNum);
    }

    const diceIcons = [
        null,
        faDiceOne,
        faDiceTwo,
        faDiceThree,
        faDiceFour,
        faDiceFive,
        faDiceSix
    ];

    const getDiceIcon = (number) => {
        return diceIcons[number]

    }

    const diceIcon = getDiceIcon(number);
    const diceTwoIcon = getDiceIcon(number);


    return (
        <>
            <div>
                <FontAwesomeIcon icon={diceIcons[number]} className="largerIcon" />
                <FontAwesomeIcon icon={diceIcons[numberTwo]} className="largerIcon" />
            </div>
            <button onClick={handleClick}>Roll Dice!</button>
        </>
    )
}

export default DiceRoll;