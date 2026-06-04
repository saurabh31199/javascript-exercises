// code for greeting button

const button = document.querySelector("button");

function greet(){
    const name = window.prompt("What is your name? ");
    const greeting =  document.querySelector("#greeting");
    greeting.textContent = `Hello! ${name}, nice to see you.`;
}

button.addEventListener("click", greet);