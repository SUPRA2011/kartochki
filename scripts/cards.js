import { dublicateElements } from "./createBoard.js";
import { shuffleArray } from "./createBoard.js";
import {gameLogic} from "./gameLogic.js"
export function createCard(flippedIcon) { const cardTemplatee = document.querySelector('#cardTemplate').cloneNode(true).content;
    const gameCard = cardTemplatee.querySelector('.card');
    // Добавление иконки, название которой передаем через параметр flippedIcon
    gameCard.querySelector('#flippedIcon').classList.add(`fa-${flippedIcon}`);
    gameCard.addEventListener("click",() => gameLogic(gameCard));
    
    return gameCard;}

export function createIconsArray(initialCount) {const cardsIcons = [
    "compass",
    "cloud",
    "play",
    "bolt",
    "stop",
    "cogs",
    "atom",
    "basketball-ball",
    "arrows",
    "angle-left",
    "bars",
    "file",
    "filter",
    "gear",
    "folder",
    "folder-open",
    "shield",
    "scissors",
    "pen-clip"
];
let selectedIcons = cardsIcons.slice(0, Math.floor(initialCount/2));
const doubleCards = dublicateElements(selectedIcons);
return shuffleArray(doubleCards);
}
