let clickButton = 0;
let unselectedButtonStyles = {
    backgroundColor: 'rgb(38 47 56)',
    color: 'hsl(216, 12%, 54%)'
};

let number1 = document.querySelector('.number1');
let number2 = document.querySelector('.number2');
let number3 = document.querySelector('.number3');
let number4 = document.querySelector('.number4');
let number5 = document.querySelector('.number5');

let submit = document.querySelector('.button');

function resetStyles() {
    number1.style.backgroundColor = unselectedButtonStyles.backgroundColor;
    number1.style.color = unselectedButtonStyles.color;
    number2.style.backgroundColor = unselectedButtonStyles.backgroundColor;
    number2.style.color = unselectedButtonStyles.color;
    number3.style.backgroundColor = unselectedButtonStyles.backgroundColor;
    number3.style.color = unselectedButtonStyles.color;
    number4.style.backgroundColor = unselectedButtonStyles.backgroundColor;
    number4.style.color = unselectedButtonStyles.color;
    number5.style.backgroundColor = unselectedButtonStyles.backgroundColor;
    number5.style.color = unselectedButtonStyles.color;
    clickButton = 0;
}

number1.addEventListener('click', () => {
    resetStyles();
    number1.style.backgroundColor = "hsl(217, 12%, 63%)";
    number1.style.color = "#fff";
    clickButton = 1;
});
number2.addEventListener('click', () => {
    resetStyles();
    number2.style.backgroundColor = "hsl(217, 12%, 63%)";
    number2.style.color = "#fff";
    clickButton = 2;
});
number3.addEventListener('click', () => {
    resetStyles();
    number3.style.backgroundColor = "hsl(217, 12%, 63%)";
    number3.style.color = "#fff";
    clickButton = 3;
});
number4.addEventListener('click', () => {
    resetStyles();
    number4.style.backgroundColor = "hsl(217, 12%, 63%)";
    number4.style.color = "#fff";
    clickButton = 4;
});
number5.addEventListener('click', () => {
    resetStyles();
    number5.style.backgroundColor = "hsl(217, 12%, 63%)";
    number5.style.color = "#fff";
    clickButton = 5;
});

submit.addEventListener('click',()=>{
    document.querySelector('.container-first').style.display = "none";
    document.querySelector('.container-second').style.display = "flex";
    document.querySelector('.rate-done h3').innerHTML = `Você selecionou ${clickButton} de 5`
    

})