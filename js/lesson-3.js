// Завдання 1
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

//const numbers = [1, 2, 3, 4, 5]

//let arr = [];
//for (const number of numbers) {
//    arr.push(number * number);
//    console.log(arr);
//}


//Завдання 2
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];
//
//const mappedArr = data.flatMap(value => value.values);
//console.log(mappedArr);

//Завдання 3
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

//const youngAge = people.some(persone => persone.age < 20);
//console.log(youngAge);




//Завдання 4
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

//for (const number of numbers) {
//    if (number%2 === 0) {
//        console.log(true);
//    } else {
//        console.log(false);
//    };
//         console.log(number);
// }



//Завдання 5
// Знайдіть перше непарне число

//const numbers = [2, 1, 6, 8, 9, 10, 12];

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


//Завдання 6
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

//const numbersArray = [4, 2, 5, 1, 3];
//const sortedNumbers = numbersArray.toSorted((a, b) => a- b);
//console.log(sortedNumbers);

//Завдання 7
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

//const stringArray = ['banana', 'orange', 'apple', 'pear'];

//console.log(stringArray.toSorted());


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