// const myElement = document.querySelectorAll('.classone')
// console.log(myElement[0]);

// const myPElemenets = document.querySelector('p')
// myPElemenets.textContent = 'I am being changed using JS'

// //looping to change all these

const myPElements = document.querySelectorAll('p')

myPElements.forEach( function(p) {
    p.textContent = 'I am changed using loop in JS'
});

const myNewPara = document.createElement('p')
myNewPara.textContent = 'I was added via JS'

document.querySelector('body').appendChild(myNewPara)

document.querySelector('button').addEventListener('click', (event)=>{
    // console.log('Button was presed')
    event.target.textContent = 'I was clicked'
})

//track input form
document.querySelector('#myform').addEventListener('change',(event)=>{
    console.log(event.target.value)
})