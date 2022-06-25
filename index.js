const button = document.getElementById("button")
let bee = document.getElementById("bee")
let container = document.getElementById("container")
let information = document.getElementById("information")
function move(){
    bee.classList.add('bee_clicked')
    container.classList.add('body_new')
    information.style.display ="block"}


button.addEventListener("click", move)


// b.style.color("red")
