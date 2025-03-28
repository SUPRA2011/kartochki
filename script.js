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
  };
function createCard(){
    const cardTemplatee = document.querySelector('#cardTemplate').cloneNode(true).content;
    const gameCard = cardTemplatee.querySelector('.card');
    return gameCard;
}
