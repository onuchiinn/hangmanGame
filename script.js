
'use strict';





let drawElementBody = function () {
    let canvas = document.getElementById("picture");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "Red";
    ctx.fillRect(100, 10, 50, 50);
};

let words = [
    "программа",
    "макака",
    "прекрасный",
    "оладушек",
    "градусник",
    "кандибобер",
    "грибок",
    "мануфактура"
];

//Внутренней переменной word задаём случайный элемент массива words
let randomWord = function () {
    let word = words[Math.floor(Math.random() * words.length)];
    return word;
}

//Создаём массив с "_", которые соответствуют количеству букв в слове. Там хранится ответ
let encryptWord = function () {
    let answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    };
    return answerArray;
}



let showMessage = function () {
    let guess = prompt("Угадай букву или нажмите Отмена для выхода из игры.");
    document.getElementById('inform-text').innerHTML = "Hello, World!";
    return guess;
};


let word = randomWord();
let answerArray = encryptWord();
let remainingLetters = word.length;
let attemp = 10;

while ((remainingLetters > 0) && (attemp > 0)) {
    alert(answerArray.join(" "));
    let guess = showMessage();
    guess = guess.toLowerCase();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите только одну букву.");
    } else {
        guess.toLowerCase();
        attemp--;
        for (var j = 0; j < word.length; j++) {
            if ((word[j] === guess) && (answerArray[j] === "_")) {
                answerArray[j] = guess;
                remainingLetters--;
            }
            else if (word[j] !== guess) {
                drawElementBody();
            }
        }
    }
}

if (attemp === 0) {
    alert("Увы. У вас закончились попытки.");
}
else {
    alert(answerArray.join(" "));
    alert("Отлично! Было загадано слово " + word);
}


