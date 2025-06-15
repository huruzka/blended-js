// Завдання 1
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

//const numbers = [1, 2, 3, 4, 5]


//const doubleNumber = numbers.map(number => { return number ** 2 });
//console.log(doubleNumber);


//Завдання 2
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];
//варіант 1
//const mappedArr = data.flatMap(value => value.values);
//console.log(mappedArr);

//варіант 2
//const getOneArr = (data) => data.flatMap((value) => value.values);

//console.log(getOneArr(data));











//Завдання 3
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

//варіант 1
//const youngAge = people.some(persone => persone.age < 20);
//console.log(youngAge);

//варіант 2
//const getYoungAge = (people) => people.some((persone) => persone.age < 20);
//console.log(getYoungAge(people));


//
















//Завдання 4
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10,];

//const allEven = numbers.every(number => number % 2 === 0);
//console.log(allEven);

//const getEven = (numbers) => numbers.every((number)=> number % 2 === 0);
//console.log(getEven(numbers));









//Завдання 5
// Знайдіть перше непарне число

//const numbers = [2, 1, 6, 8, 9, 10, 12];

//варіант 1
//function firsOdd(numbers){
//for (const number of numbers) {
//    if (number % 2 !== 0) {
//        return number;
//    }
//
//    }
//}
//const result = firsOdd(numbers);
//console.log(result);//

//варінт 2
//const firstOdd = numbers.find(number => number % 2 !== 0);

//console.log(firstOdd);

//варінт 3
//const getFirstOdd = (numbers) => numbers.find((number) => number % 2 !== 0);

//console.log(getFirstOdd(numbers));







//Завдання 6
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

//const numbersArray = [4, 2, 5, 1, 3];

//варіант 1
//const sortedNumbers = numbersArray.toSorted((a, b) => a- b);
//console.log(sortedNumbers);

//варіант 2
//const getSortedNumbers = (numbersArray) => numbersArray.toSorted((a, b) => a - b);
//console.log(getSortedNumbers(numbersArray));









//Завдання 7
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

//const stringArray = ['banana', 'orange', 'apple', 'pear'];

//варіант1
//console.log(stringArray.toSorted());

//варіант2
//const getSortedArr = (stringArray) => stringArray.toSorted((a, b)=> a.localeCompare(b));
//console.log(getSortedArr(stringArray));




// Reverse. Напишіть функцію, яка розгортає масив у зворотному порядку.
// Будь ласка, не використовуйте array.reverse(), щоб зробити завдання цікавішим.
//const data = [10, 20, 30, 40, 50, 60];
//const alphData = ["a", "b", "c", "d", "e"];

//const getReverse = (data) => data.toSorted((a, b)=> b - a);
//console.log(getReverse(alphData));

//const gatReverseAlph = (alphData) => alphData.toSorted((a, b)=> b.localeCompare(a));
//console.log(gatReverseAlph(alphData));



//Завдання 8
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

//const users = [
// { name: 'John', age: 27 },
// { name: 'Jane', age: 31 },
//    { name: 'Bob', age: 19 },
//];

//const sortedAge = users.toSorted((a, b) => a.age - b.age);
//console.log(sortedAge);








//Завдання 9
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

//const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

//const upTwenty = user.filter(user => user.age > 20);
//console.log(upTwenty);//




//Завдання 10
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

//const numbers = [1, 2, 3, 4, 5];
//варіант 1
//const sum = numbers.reduce((total, number) => total + number,0);
//console.log(sum);


//варіант 2
//const getSum = (numbers)=> numbers.reduce((total, number)=> total + number,0);

//console.log(getSum(numbers));




//Завдання 11
 // Розроби клас Calculator, який дозволяє виконувати арифметичні 
 //  операції над числом за допомогою методів класу, підтримуючи  
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator
 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.
 
 // - метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод substruct - Віднімає value від поточного значення. Повертає this.
 
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод multiply -Множить поточне значення на value. Повертає this.
 
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 
 // Приклад використання:


//class Calculator{
//    #value = 0;
//
//    number(value) {
//       this.#value = value;
//        return this;
//   }
//    getResult() {
//       return this.#value;
//  }
//   add(value) {
//        this.#value += value;
//        return this;
//    }
//   substruct(value) {
//        this.#value -= value;
//        return this;
//    }
//   divide(value) {
//       if (value === 0) {
//           return `Error! Cann't devide`
//       } else {
//           this.#value /= value;
//           return this;
//            
//       }
//  }
//  multiply(value) {
//        this.#value *= value;
//        return this;
//   }
//}
//const result = new Calculator()
//   .number(10)   // Встановлюємо початкове значення 10
//  .add(5)       // Додаємо 5 (10 + 5 = 15)
//  .substruct(3)  // Віднімаємо 3 (15 - 3 = 12)
//  .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//  .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//  .getResult(); // Отримуємо результат: 24

//  console.log(result); // 24



//Завдання 12:
 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email
//
 
//class Client{
//    #login;
//    #email;

//    constructor(login, email){
//        this.#login = login;
//        this.#email = email;
//}
//    get email(){
//    return this.#email;
//    }
//    set email(newEmail){
//        this.#email = newEmail;
//    }
//    get login() {
//        return this.#login;
//    }
 //   set login(newLogin) {
//        this.#login = newLogin;
//    }
// }





// Напиши класс Notes який управляє коллекцієй нотаток у
// властивості items.
// Нотатка це  об'єкт з властивостями text, priority
// Додай класу статичну властивість Priority,
// в якій буде зберігатись об'єкт з пріорітетами ("high", "middle", "low").
// Додай методи getNotes(), addNote(note), removeNote(noteText)
// updatePriority(noteText, newPriority)
// const note = new Notes();
// note.addNote({ text: "Note1", priority: Notes.Priority.LOW });
// note.addNote({ text: "Note2", priority: Notes.Priority.LOW });
// note.addNote({ text: "Note3", priority: Notes.Priority.HIGHT });

// note.updatePriority("Note2", Notes.Priority.MIDDLE);
// note.updatePriority("Note3", Notes.Priority.MIDDLE);

// note.removeNote("Note1");
// note.getNotes();