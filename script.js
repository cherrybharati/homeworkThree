
const textareaEL = document.getElementById('password');
const generateBtn = document.getElementById('generate');

// const UPPERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// const LOWERS = 'abcdefghijklmnopqrstuvwxyz'
// const NUMBERS = '1234567890'
// const SPECIALS = '!@#$^*'

// learned to use ASCII keys here

const UPPER_CHARS = returnCharacters(65, 90)
const LOWER_CHARS = returnCharacters(97, 122)
const NUMBER_CHARS = returnCharacters(48, 57)
const SPECIAL_CHARS = returnCharacters(33, 47);


generateBtn.addEventListener('click', displayPW)

// added function to display PW, which runs generate PW

function displayPW(){
  textareaEL.value = generatePW()

}

function generatePW(){
      const length = parseInt(prompt('Length (8-128)'))

      if(isNaN(length) || length < 8 || length > 128){
        return ' '
      }

      const hasUpper = confirm('Has Upper')
      const hasLower = confirm('Has Lower')
      const hasNum = confirm('Has Number')
      const hasSpec = confirm('Has Special')

      if(!(hasUpper || hasLower || hasNum || hasSpec)){
        return ' '

      }

let POSSIBLE = [];
let password = []

if(hasUpper){
  POSSIBLE = POSSIBLE.concat(UPPER_CHARS)
}
if(hasLower){
  POSSIBLE = POSSIBLE.concat(LOWER_CHARS)
}
if(hasNum){
  POSSIBLE = POSSIBLE.concat(NUMBER_CHARS)
}
if(hasSpec){
  POSSIBLE = POSSIBLE.concat(SPECIAL_CHARS)
}

for(let i = 0; i < length; i++){
  password.push(randomArrayEl(POSSIBLE))

}

return password.join(' ')

    }

function returnCharacters(low, hi){
    const numbers = [];

    for (let i = low; i <= hi; i++) {
        numbers.push(String.fromCharCode(i));

    }

    return numbers;
}

function randomArrayEl(array){
    return array[Math.floor(Math.random() * array.length)];

}
