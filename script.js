import { createBoard } from "./scripts/createBoard.js";
const gameBoard = document.querySelector("#gameBoard");
const startButton = document.querySelector('.board__button');
const input = document.querySelector('.board__input');
const couple = {first:null,second:null,firstClickable:true,secondClickable:true}
let totalTime  = 60
let totalFlips = 0
let intervalId = 0

function startTimer(){
  const stTime = document.querySelector(".state__time");
  const stMoves = document.querySelector(".state__moves");

intervalId = setInterval(() => {
  totalTime = totalTime-1
  stTime.textContent = `Время:${totalTime}сек`;
  stMoves.textContent = `Шаги: ${totalFlips}`;
  if (totalTime===0) {
    clearInterval(intervalId) // останавливает вызов функции с интервалом
  }
}, 1000) // функция, которая постоянно выполняет другую функцию с интервалом в 1 секунду

}

startButton.addEventListener("click", (event) => {
    event.preventDefault();
    let count;
    let columns = parseInt(input.value);
    if (columns >= 2 && columns <= 6 && columns % 2 === 0) {
        count = columns*columns;
    } else {
        alert("Пожалуйста, введите четное число от 2 до 6.");
        return;
    }
    createBoard(columns, count);
});



