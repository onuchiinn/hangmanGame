
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

let pickWord = function (word) {
    return word[Math.floor(Math.random() * word.length)];
};


let setupAnswerArray = function (word) {
    for (let i = 0; i < word.length; i++) {
        word[i] = "_";
    }
};


let showPlayerProgress = function (answerArray) {
    alert(setupAnswerArray(pickWord)).join(" ");
};

let getGuess = function () {
    let guess = prompt("Угадай букву или нажмите Отмена для выхода из игры.");
    guess = guess.toLowerCase();
}

let updateGameState = function (guess, word, answerArray) {
    guess.toLowerCase();
    attemp--;
    for (let j = 0; j < word.length; j++) {
        if ((word[j] === guess) && (answerArray[j] === "_")) {
            answerArray[j] = guess;
            remainingLetters--;
        }
    }
}

let showAnswerAndCongratulatePlayer = function (answerArray) {
    if (attemp === 0) {
        alert("Увы. У вас закончились попытки.");
    }
    else {
        alert(answerArray.join(" "));
        alert("Отлично! Было загадано слово " + word);
    }
};









pickWord(words);
setupAnswerArray(pickWord);
let attemp = 10;
let remainingLetters = pickWord.length;
while ((remainingLetters > 0) && (attemp > 0)) {

    let guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите только одну букву.");
    } else {
        let correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}
showAnswerAndCongratulatePlayer(answerArray);