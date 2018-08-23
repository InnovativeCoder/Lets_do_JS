const days = ['Mon','Tue','Wed','Thu','Fri']

for (let i = 0; i < days.length; i++) {
    const element = days[i];
    console.log(element)
}

const myTodos = []

myTodos.push('Buy Bread')
myTodos.push('Post on Instagram')

myTodos.forEach(function(todo, index) {
    console.log(`Your task no. ${index + 1} is : ${todo}`);
})


days.forEach(function(day){
    console.log(day)
})