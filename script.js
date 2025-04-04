const gameBoard = document.querySelector("#gameBoard");
const startButton = document.querySelector('.board__button');
const input = document.querySelector('.board__input');

startButton.addEventListener("click", (event) => {
    event.preventDefault();
    
    let columns = parseInt(input.value);
    if (columns >= 2 && columns <= 6 && columns % 2 === 0) {
        count = columns*columns;
        createBoard(columns, count);
    } else {
        alert("Пожалуйста, введите четное число от 2 до 6.");
    }
});

function createBoard(columns) {
    gameBoard.textContent = "";
  
    // Создание клона шаблона
    const template = document.querySelector('#gameTableTemplate').cloneNode(true).content;
    // В шаблоне находится таблица
    const gameTable = template.querySelector('.table');
    // В шаблоне находится кнопка "Рестарт"
    const restartBtn = template.querySelector(".table__button");
  
    // Добавляются правила для grid-контейнера в зависимости от значения параметра columns
    gameTable.style = `
    grid-template-columns: repeat(${columns}, 1fr);
    grid-template-rows: repeat(${columns}, 1fr);
    `;
  
    // Получившаяся таблица добавляется в игровое поле
    gameBoard.append(gameTable);
  
    // Слушатель события клика на кнопке "Рестарт"
    restartBtn.addEventListener("click", () => {
      // Обновление страницы
      location.reload();
    });
    // Добавление кнопки "Рестарт" в игровое поле
    gameBoard.append(restartBtn);
    const massiv = []
    array.forEach((icons) => {
        massiv.push(icons, icons);
      });

};
const icons = shuffleArray(count);
function createCard(flippedIcon) {
    const cardTemplatee = document.querySelector('#cardTemplate').cloneNode(true).content;
    const gameCard = cardTemplatee.querySelector('.card');
    const flippedIconElement = gameCard.querySelector('#flippedIcon');
    
    flippedIconElement.classList.add(`fa-${flippedIcon}`);
    
    return gameCard;
}

function createIconsArray(initialCount){
    const cardsIcons = [
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
    const selectedIcons = cardsIcons.slice(0, initialCount/2);
doubleCards = duplicateElements(cards);
return shuffleArray(doubleCards);

};
icons.forEach((icon) => {
    gameTable.append(createCard(icon));
  });
function dublicateElements(array){
    const massiv = []
    array.forEach((item) => {
        massiv.push(item, item);
      });    
return massiv;
}
// Перемешивание элементов массива
function shuffleArray(array) {
    // Определяем количество элементов массива
    let currentIndex = array.length;
  
    // Повторяем до тех пор, пока текущий индекс не достиг нуля
    while (currentIndex !== 0) {
      // Отнимаем индекс
      currentIndex = currentIndex-1;
      // Генерируем рандомный индекс
      const randomIndex = Math.floor(Math.random() * currentIndex);
  
      // Сохраняем элемент текущего индекса
      const temp = array[currentIndex];
      // По текущему индексу размещаем элемент по случайному индексу
      array[currentIndex] = array[randomIndex];
      // А на место элемента по случайному индексу ставим сохраненный элемент бывшего текущего индекса
      array[randomIndex] = temp;
    };
  
    // Возвращаем измененный массив
    return array;

}
