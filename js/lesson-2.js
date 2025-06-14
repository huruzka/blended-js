// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

//const styles = [`jazz`, `blues`];
//styles.push(`rock-n-roll`);
//const index = styles.indexOf(`blues`);
//if (index === -1) {
//    console.log(`Element not found`);
//} else {
//    styles[index] = "classic";
//}

//console.log(styles);

//function logItems(array) {
//    for (let i = 0; i < array.length; i++)
//        console.log(`${i+1} - ${array[i]}`);
//}

//logItems(styles);//



// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

//function checkLogin(logins) {
//    const userName = prompt("Буль ласка, введіть своє ім'я");

//    if (userName === null || userName === "") {
//        return prompt("Не залишайте пустий рядок, введіть своє ім'я");
//    }

//    else if(logins.includes(userName)) {
  //      return alert(`Welcome, ${userName}!`);
 //   } else {
   //     return alert(`User not found`);
 //   }
//    console.log(logins);
//}
//checkLogin(logins);


// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

    //unction caclculateAverage(...args) {
    //console.log(args);
   // let sum = 0;
   // let counter = 0;
 //   for(const arg of args) {
//        if(typeof arg === "number") {
//            sum += arg;
//            counter++;
//        }
//    }
//    console.log(sum);
//    return sum / counter;
//
//}

 //  caclculateAverage(2, 5, 8, 15, 9);

 


 // Напишіть функцію, яка сумуватиме сусідні числа 
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].


//const someArr = ["22", 11, 34, 5, 12, 13, 14, 15];

//function sumNum(someArr) {
//  let counter = [];

//  if (counter === NaN) {
//  console.log(Error);
//  }
//  for (let i = 0; i < someArr.length-1; i++){
//    counter.push(someArr[i]+someArr[i+1])
//  }
//  console.log(counter);
//  return counter;

//}
//console.log(sumNum(someArr));


// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//    name: "John",
//    age: 20,
//     hobby: "tenis",//
//     premium: true,
//};
   
//user.mood = `happy`;
//user.hobby = `skydiving`;
//user.premium = false;

//const userArrs = Object.entries(user);
//for (const arr of userArrs) {
//  console.log(`${arr[0]}: ${arr[1]}`);
//}


// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

//const salaries = {//
//       Mango: 100,
//       Poly: 160,
//       Ajax: 1470,
//};

//let sum = 0;
//const arrSalaries = Object.values(salaries)
//for (const value of arrSalaries) {
//  sum += value;

//}
//console.log(sum);

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'


//const calculator = {
//  read(a, b){
 //   this.a = a;
//    this.b = b;
//  },
  
//  exist() {
//    return this.a !== null && this.b !== null;
//  },
//  sum() {
//    if (!this.exist()) {
//      return 'No such properties';
//  }
//  return this.a + this.b;
//},
//  mult() {
//    if (this.exist()) {
//      return 'No such propeties';
//  }
//  return this.a * this.b;
//  }
//};

//calculator.read(25, 30);
//console.log(calculator.mult());