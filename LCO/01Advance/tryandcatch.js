const converttors = (dollar) => {
    if(typeof dollar ==='number'){
        return dollar * 64
    } else {
        throw Error('Amount needs to be in number')
    }
}



try {
    const myValue = converttors('five')
    console.log(myValue)

} catch (error) {
    console.log(error)
}

console.log('T will not run if program crashes')