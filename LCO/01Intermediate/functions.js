let sayHello = function(){
    console.log("Greeting meesage for user")
    console.log("Hey User")
}

sayHello()

let fullNameMaker = function(firstName, lastName){
    console.log('Welcoem here')
    console.log(`Happy to have you, ${firstName} ${lastName}`)
}

fullNameMaker('John', 'Doe')

// returning some value

let add = function(num1, num2){
    let added = num1 + num2
    return added
}

let sum = add(5,3)

console.log(sum)