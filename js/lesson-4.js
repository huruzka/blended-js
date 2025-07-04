// 1 - отримай body елемент і виведи його в консоль;
//const bodyEl = document.querySelector("body");
// 2 - отримай елемент id="title" і виведи його в консоль;
//const titleEl = document.querySelector("#title");
// 3 - отримай елемент class="list" і виведи його в консоль;
//const listEl = document.querySelector(".list");
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
//const elementsWithDataTopic = document.querySelectorAll('[data-topic]');
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
//const firstElWithDataTopic = elementsWithDataTopic[0];
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
//const lastElWithDataTopic = elementsWithDataTopic[elementsWithDataTopic.length -1];
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
//const nextToH1 = document.querySelector("h1").nextElementSibling;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
//const allElTitle = document.querySelectorAll("h3");
//console.log(allElTitle);
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
//allElTitle.forEach(h3 => {
  //  h3.style.color = 'red';
  //});

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
//const listElWithDataTopic = document.querySelector('li[data-topic="navigation"]');
//console.log(listElWithDataTopic);
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
//listElWithDataTopic.style.backgroundColor = 'yellow';
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
//const navEl = document.querySelector('[data-topic="navigation"]').lastElementChild;
//navEl.textContent = "Я змінив тут текст!";
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
//const currentTopic = "manipulation";
//const findElWithManipulation = document.querySelector(`[data-topic="${currentTopic}"]`);
//console.log(findElWithManipulation);
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
//findElWithManipulation.style.backgroundColor = "blue";
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
//const findTitle = document.querySelector(".completed");
//console.log(findTitle);
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
//if (findTitle) {
//  const liElement = findTitle.closest("li");
//  if (liElement) {
//    liElement.remove();
//  }
//}
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
//const heading = document.querySelector("h1");
//const newParagraph = document.createElement("p");
//newParagraph.textContent = "Об'єктна модель документа (Document Object Model)";

//heading.insertAdjacentElement("afterend", newParagraph);
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
//const findListEl = document.querySelector(".list");
//const newLi = document.createElement("li");
//const newH3 = document.createElement("h3");
//newH3.textContent = "Властивість innerHTML";
//const newElP = document.createElement("p");
//newElP.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";

//newLi.appendChild(newH3);
//newLi.appendChild(newElP);

//findListEl.appendChild(newLi);
//console.log(findListEl);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
//const newListMarkUp =
//  '<li><h3> Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p></li>';

//findListEl.insertAdjacentElement("beforeend", newListMarkUp);
  

// 20 - очисти список
//findListEl.innerHTML = "";








// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
//const input = document.querySelector(".js-username-input");

//input.addEventListener('input', checkInputValue);

//function appendChild() {
//  const inputValue = input.value.trim();
//  if (inputValue.length > 6) {//
//    input.classList.add("success");
//    input.classList.remove("error");
//  } else {
//    input.classList.add("error");
//    input.classList.remove("success");
  //  }
  
//  input.classList.toggle("success", inputValue.lenght >= 6);
//}

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.



const form = document.querySelector(".js-contact-form");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const [userName, accept] = event.target.elements;
  const userNameValue = userName.value.trim();
  console.log(userNameValue);
  if (userNameValue === '') {
    alert("Input cannot be empty");
    return;
  } if (!accept.checked) {
    alert("Check checkbox")
    return;
  } console.log({userName:userNameValue});
  form.reset

}

const textInput = document.querySelector(".js-username-input");
const output = document.querySelector(".js-username-output");

form.addEventListener('input', addNameToSpan);

function addNameToSpan(event) {
  const trimmedText = textInput.value.trim();

  output.textContent = trimmedText === "" ? "Anonymous" : trimmedText;
}



// Збереження об'єкта
function saveObject(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}

// Отримання об'єкта
function getObject(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

// Видалення об'єкта
function removeObject(key) {
  localStorage.removeItem(key);
}

const user = { name: 'John', age: 30 };
saveObject('user', user);
console.log(getObject('user'));
removeObject('user');
console.log(getObject('user'));