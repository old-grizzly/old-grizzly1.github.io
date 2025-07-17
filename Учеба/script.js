// function countChars(text, letter) {
//     let i = 0;
//     let count = 0;
//     while (i < text.length) {
//         if (text[i].toUpperCase() === letter.toUpperCase()) {
//             count += 1;
//         }
//         i += 1;
//     }
//     return count;
// }

// function countLetters() {
//     const text = document.getElementById('inputText').value;
//     const letter = document.getElementById('letter').value;
//     const result = countChars(text, letter);
//     document.getElementById('result').innerText = `Количество букв "${letter}": ${result}`;
// }


// function makeItFunny(str, n){
//   const arr = str.split("");
//   for (let i = n - 1; i < arr.length; i += n) {
//     arr[i] = arr[i].toLocaleUpperCase();
//   }
//   return arr.join("");
// }
// function transformText() {
//     const input = document.getElementById('inputText').value;
//     const step = parseInt(document.getElementById('step').value);
    
//     if (isNaN(step) || step <= 0) {
//         document.getElementById('result').innerText = 'Шаг должен быть положительным числом';
//         return;
//     }
    
//     const result = makeItFunny(input, step);
//     document.getElementById('result').innerText = `Результат: ${result}`;
// }

// function getNumberExplanation(number){
//   switch (number){
//     case 666:
//       return "devil number"
//     case 42:
//       return "answer for everything"
//     case 7:
//       return 'prime number'
//   }
//   return 'just a number'
// }




// const age = prompt('Введи текст', '');
// const rag = +prompt('Введи число', '');

// const result = makeItFunny(age, rag)
// alert(result);

// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);

// alert(a + b); // 12

// let login = prompt("текс", "");
// let message = (login == 'Сотрудник') ? 'Привет' :
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина' :
//   '';
// alert(message)

// let login = prompt('Кто там?', '')

// if (login === 'Админ'){
//   let pass = prompt('Пароль?', '')
//   if (pass === 'Я Главный'){
//     alert('Здравствуйте')
//   } 
//   else if (pass === '' || pass === null){
//     alert("Отменено")
//   }
//   else{
//     alert("Неверный пароль")
//   }
// }
// else if (login === "" || login === null){
//   alert("Отменено")
// }
// else{
//   alert("Я вас не знаю")
// }

// let num1 = 10,
//     num2 = 20,
//     result;

// result ??= num1 ?? num2
// alert(result)

// for (let i = 2; i <= 10; i++){
//     if (i % 2 === 0){
//         alert (i)
//     }
// }

// let i = 0
// while (i < 3){
//     alert( `number ${i}!` )
//     i++
// }

// let num;

// do {
//   num = +prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);

// let n = 10
// nextPrime:
// for (i = 2; i <= n; i++){
//      for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   alert( i ); // простое число
// }

// const number = +prompt('Введите число между 0 и 3', '');

// switch (number){
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
// }

// function mySubstr(text, number){
//   let i = 0
//   let result = ''
// while (i <= text.length){
//   result = text.slice(0, number)
//   i += 1
// }
// return result
// }
// let text = prompt('Текст', '');
// let number = +prompt('Число', '');
// alert(mySubstr(text, number))

// 'use strict';

// let text = prompt('Ввод', '');
// let number = prompt('Ввод', '');

// let pow = (x, n) => {
//     if (n >= 1){
//    let result = x ** n
//    return result
//    }
//    return "Ошибка"
// }

// alert(pow(text, number))


// let ask = (question, yes, no) =>{
//     if (confirm(question)) yes()
//     else no();
// }

// ask(
//   "Вы согласны?",
//   () => alert("Вы согласились.") ,
//   () => alert("Вы отменили выполнение.") 
// );выфвфывфывфыв
// выфвфывфывфыв