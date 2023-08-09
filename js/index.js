"use strict"; // строгий режим. Выбрасывает ошибки при небольших ошибках и опечатках (например объявление переменной без let/const)

const ROOT_SELECTOR = ":root";
const ADD_BUTTON_SELECTOR = ".btn-add";
const CHILD_ELEMENT_CSS_CLASS = "div-shadow";
const DELETE_BUTTON_SELECTOR =".btn-delete";

// querySelector позволяет искать по селектору css внутри элемента
const rootElement = document.querySelector(ROOT_SELECTOR);
const divContainer = document.getElementById("div-container");

// т.е. если переменная равна элементу - то внутри него можно производить поиск
console.log("inner element: ", rootElement.querySelector("#div_container"));

const addButton = document.querySelector(ADD_BUTTON_SELECTOR);
const deleteButton = document.querySelector(DELETE_BUTTON_SELECTOR);

// Добавление обработчика (слушателя) событий. В документациях можно найти разные виды событий
// В данном случае при нажатии в области элемента будет вызван колбек (callback), который идёт вторым параметром
// Знак вопроса после addButton означает, что перед попыткой выполнить метод addEventListener 
//      сначала проведётся проверка на наличие значения у addButton. Если значения нет, то последующие за ? операции не будут выполняться
//      Таким образом можно сократить проверку наличия значения и не получать ошибки, что метода нет у null/undefined 
addButton?.addEventListener("click", () => {
    const newElement = document.createElement("div"); 
    newElement.classList.add("div-shadow");
    divContainer.appendChild(newElement);
    
    console.log("Children elements count: ", divContainer.children.length);
});


//Кнопка удаления последнего элемента
deleteButton?.addEventListener("click", clearLastBlock);

//Функция удаления последнего элемента
function clearLastBlock(){
  divContainer.removeChild(divContainer.lastChild);
  console.log("Children elements count: ", divContainer.children.length);
}

