const counter1 = document.getElementById("number-counter");
const decrease = document.getElementById("decreasebtn");
const reset = document.getElementById("resetbtn");
const increase = document.getElementById("increasebtn");
let counter = 0;

decrease.addEventListener("click", decreaseby1());

function decreaseby1(){
    counter = counter - 1;
    counter1.innerText = counter;
}

increase.addEventListener("click", increaseby1());

function increaseby1(){
    counter = counter + 1;
    counter1.innerText = counter;
}

reset.addEventListener("click", resetto0());

function resetto0(){
    counter = 0;
    counter1.innerText = counter;
}

