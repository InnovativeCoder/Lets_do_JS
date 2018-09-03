// datatype - Array

let one = 'one'
let two = 'two'


const superheroes =  ['Iron Man','Spider Man',1, true]

console.log(superheroes)

console.log(`We have ${superheroes.length} super heroes`);

const number = ['One', 'Two', 'Three', 'Four','Five','Six']
number[1] = 'SOMETHING'

console.log(number)

//start

number.shift()

console.log(number)

number.unshift('Anything')

console.log(number)

//end

console.log(number.pop()) 
console.log(number)

//Middle
number.splice(1,2,'SOMETHING') //position, no.of elements, thing you want to put 
console.log(number)