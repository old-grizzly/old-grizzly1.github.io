let a = -0.304;
console.log(a);

const one = 'Naharis';
const two = 'Mormont';
const three = 'Sand';

console.log(one[2] + two[1] + three[3] + two[4] + two[2]);

console.log()

const fruitsCount = -2309

console.log(Math.abs(fruitsCount))

const text = 'Never forget what you are, for surely the world will not'
const a = ('First: ' + text[0])
const b = ('Last: ' + text[55])
console.log(a)
console.log(b)

const a = Math.random() * 11
const b = Math.floor(a)
console.log(b)

const text = 'When you play the game, you win even if you don\'t want to win.'
console.log(text.slice(5, 13).replace('you', 'someone').length)

export default printMotto
const printMotto = () => {
  const text = 'Winter is coming'
  console.log(text)
}
printMotto()


const truncate = (text, length) => {
  // BEGIN (write your solution here)
  if (text.length <= length){
    return text
  }
  return text.slice(0, length) + '...'
  // END
}
export default truncate // можно не использовать сонсоль лог
                        // можно делать неравенства, через если и открывать еще одни скобки


const star = '*'.repeat(4)
1234567891234567


const getHiddenCard = (number, star = 4) => {
  return ('*'.repeat(star) + number.slice(12, 16))
}
export default getHiddenCard




const capitalize = (name) => name.slice(0, 1).toUpperCase() + name.slice(1)

export default capitalize




const isInternationalPhone = (number) => number.slice(0, 1) === '+'

export default isInternationalPhone


const isLeapYear = year => {
 const result = (year % 400 === 0) || ((0 === year % 4) && (0 != year % 100))
 return result
}
export default isLeapYear

const a = ''
const getLetter = (name, index) => {
  if (index === 0 || index > name.length){
    return a
  }
  const getText = name.slice(index - 1, index)
  return getText
} 
export default getLetter

const getLetter = (name, index) => name.slice(index - 1, index)

export default getLetter

const normalizeUrl = (adress) => (adress.startsWith('https://')) ? adress : 'https://' + adress
export default normalizeUrl


import reverse from './reverse'

const convertText = (text) => {
  if (text === ''){
    return text
  }
  else if (text.slice(0, 1) === text.slice(0, 1).toUpperCase()){
    return text
 }
  else{
    return reverse(text)
 }
}
  export default convertText


const convertText = (text) => text === '' ? text : text.slice(0, 1) === text.slice(0, 1).toUpperCase() ? text : reverse(text)


export default convertText


const getNumberExplanation = (number) =>{
  switch (number){
    case 666:
      return "devil number"
    case 42:
      return "answer for everything"
    case 7:
      return 'prime number'
  }
  return 'just a number'
}

export default getNumberExplanation



const printNumbers = (initialNumber) => {
  
  while (initialNumber >= 1){
    console.log(initialNumber)
    initialNumber -= 1
  }
  console.log('finished!')
}

export default printNumbers


const joinNumbersFromRange = (start, finish) =>{
  let i = start
  let result = ''
  while (i <= finish){
    result = `${result}${i}`
    i += 1
  }
  return result
}
export default joinNumbersFromRange



const mySubstr = (text, number) =>{
  let i = 0
  let result = ''
while (i <= text.length){
  result = text.slice(0, number)
  i += 1
}
return result
}
export default mySubstr


const countChars = (text, letter) =>{
 let i = 0
 let count = 0
 while (i < text.length){
  if (text[i].toUpperCase() === letter.toUpperCase()){
    count += 1
  }
  i += 1
 }
 return count
}
export default countChars


const makeItFunny = (text, number) => {
  let i = number - 1 
  const count = text.split('')
  while (i < count.length){
    count[i] = count[i].toLocaleUpperCase()
    i += number
    
  }
  return count.join('')
}
export default makeItFunny


const makeItFunny = (str, n) => {
  const arr = str.split("");
  for (let i = n - 1; i < arr.length; i += n) {
    arr[i] = arr[i].toLocaleUpperCase();
  }
  return arr.join("");
}
export default makeItFunny


const encrypt = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 2) {
    if (i + 1 < str.length) {
      result += str[i + 1] + str[i];
    } 
    else {
      result += str[i];
    }
  }
  return result;
}
export default encrypt


import { getTriangleArea } from 'myMathModule';

function calculateTriangleArea(n) {
  const base = Math.pow(n, 2) / 2;
  const height = n;
  return getTriangleArea(base, height);
}

export default calculateTriangleArea;