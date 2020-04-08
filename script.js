
'use strict';


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
let word = words[Math.floor(Math.random() * words.length)];


let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
let remainingLetters = word.length;
let attemp = 10;


while ((remainingLetters > 0) && (attemp > 0)) {
    alert(answerArray.join(" "));
    let guess = prompt("Угадай букву или нажмите Отмена для выхода из игры.");
    guess = guess.toLowerCase();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите только одну букву.");
    } else {
        guess.toLowerCase();
        attemp--;
        for (var j = 0; j < word.length; j++) {
         if ((word[j] === guess) && (answerArray[j] === "_")) 
         {
                answerArray[j] = guess;
                remainingLetters--;
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