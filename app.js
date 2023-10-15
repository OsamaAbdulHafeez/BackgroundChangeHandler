const colors = ['#047474','#0b2ad8','#e6d709','#155012','#f73b5a','#0aedda','#566160']
let colorCode = document.querySelector('span')
let h1 = document.querySelector('h1')
let button = document.querySelector('button')
function colorhandler(){
    let random = Math.floor(Math.random()*colors.length)
    document.body.style.backgroundColor = colors[random]
    h1.style.color = "#fff"
    colorCode.textContent = colors[random]
    console.log(random)
}