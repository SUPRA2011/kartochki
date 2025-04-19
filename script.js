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

function createBoard(columns, count) {
  
  gameBoard.textContent = "";
  
    // Создание клона шаблона
    const template = document.querySelector('#gameTableTemplate').cloneNode(true).content;
    // В шаблоне находится таблица
    const gameTable = template.querySelector('.table');
    // В шаблоне находится кнопка "Рестарт"
    const restartBtn = template.querySelector(".table__button");
  
     // Создание определенного количества иконок
    const icons = createIconsArray(count);

    // Заполнение ячеек карточками
    icons.forEach((icon) => {
      gameTable.append(createCard(icon));
    });

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

    startTimer();
};

function createCard(flippedIcon) {
    const cardTemplatee = document.querySelector('#cardTemplate').cloneNode(true).content;
    const gameCard = cardTemplatee.querySelector('.card');
    // Добавление иконки, название которой передаем через параметр flippedIcon
    gameCard.querySelector('#flippedIcon').classList.add(`fa-${flippedIcon}`);
    gameCard.addEventListener("click",() => gameLogic(gameCard));
    
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
    let selectedIcons = cardsIcons.slice(0, Math.floor(initialCount/2));
    const doubleCards = dublicateElements(selectedIcons);
    return shuffleArray(doubleCards);
};

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
function gameLogic(card) {
    // Если время вышло - ничего не делаем
    if (totalTime === 0) return;
    // Если обе карточки не кликабельны, ничего не делаем
    if (!couple.firstClickable && !couple.secondClickable) return;
  
    // Переворачиваем карточку
    card.classList.add('flip');
    totalFlips = totalFlips + 1;
    // Проверяем, кликнута ли первая карточка
    if (couple.first === null) {
      // Если нет, то сохраняем на нее ссылку и считаем кликнутой
      couple.first = card;
      couple.firstClickable = false;
    } else if (couple.second === null && couple.first !== card) {
      // Если да, то проверяем, кликнута ли вторая карточка и не является ли вторая карточка той же самой карточкой, что и первая, и если нет, то сохраняем ссылку на эту карточку и считаем ее кликнутой
      couple.second = card;
      couple.secondClickable = false;
    }
  
    // Если какой-либо карточки не кликнуто, ничего не делаем
    if (couple.first === null || couple.second === null) return;
  
    // Сравниваем классы двух карточек и сохраняем логический результат в переменную (это для повышения читабельности)
    const isEqual = couple.first.firstElementChild.classList[2] === couple.second.firstElementChild.classList[2];
  
    // Если классы одинаковы
    if (isEqual) {
      setTimeout(() => {
        // То перекрашиваем их в зеленый с задержкой в 1 секунду
        couple.first.classList.add('successfully');
        couple.second.cassList.add('successfully');
  
        // Сбрасываем все ссылки и состояния
        refresh();
      }, 1000);
    } else {
      setTimeout(() => {
        // Иначе переворачиваем карточки обратно с задержкой в 1 секунду
        couple.first.classList.remove('flip');
        couple.second.classList.remove('flip');
  
        // Сбрасываем все ссылки и состояния
        refresh();
      }, 1000);
    }
  
    // Функция сброса ссылок и состояний
    function refresh() {
      couple.first = null;
      couple.second = null;
      couple.firstClickable = true;
      couple.secondClickable = true;
    }
      isWin();
  }
  function isWin() {
    const gameTable = document.querySelector('.table');
    if (Array.from(gameTable.children).every((card) => card.classList.contains('flip'))) {
      setTimeout(() => {
        clearInterval(intervalId);
        alert("You Win");
      }, 2000)
    }
  }