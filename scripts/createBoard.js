import {createCard, createIconsArray} from "./cards.js";
import {startTimer} from "./timer.js";
function createBoard(columns, count){
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

}

export function dublicateElements(array){const massiv = []
  array.forEach((item) => {
      massiv.push(item, item);
    });    
  return massiv;}
export {createBoard};
export function shuffleArray(array){let currentIndex = array.length;

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

