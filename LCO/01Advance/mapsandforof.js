var john = {
    name : 'I am innovative',
    age : 24,
    isActive : true
}
var marry = {
    name : 'I am marry',
    age : 20,
    isActive : true
}
var sam = {
    name : 'I am sam',
    age : 40,
    isActive : false
}

let users = new Map()
console.log(typeof users)

users.set('john', john)
users.set('marry', marry)
users.set('sam', sam)

console.log(users)
console.log(users.size)

for (const key  of users.keys()){
    console.log(key)
}

for (const value  of users.values()){
    console.log(value.name)
}

users.forEach((value) => console.log(value.name))

var ArrofArr = [['one',' 1'],['two','2'],['three','3']]

var newMap = new Map(ArrofArr)

console.log(newMap)