// const sayHello = function(name){
//     return "Hey there, " + name + " !"
// }

// console.log(sayHello('Sammy'))

const sayHello = (name) => `Hey there,${name} !`

console.log(sayHello('Sammy'))



const todos = [{
    title : 'Buy Bread',
    isDone : true
},

{
    title:'Post on Instagram',
    isDone :false
}]

const thingsDone = todos.filter((todo) => {
    if(todo.isDone === true){
        return todo.title
    }
})

console.log(thingsDone)


const cameras = {
    price : 600 ,
    weight : 2000 ,
    myDes : function(){
        return `This canon camera is of ${this.price} $`
    }
}

console.log(cameras.myDes())