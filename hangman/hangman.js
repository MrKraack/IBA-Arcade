//Get scoreboard from DOM
const scoreboard = document.getElementById("scoreboard");
//Get win loss text field from DOM
let winLossText = document.getElementById("winLossText");

window.onload = (event) => {
    scoreboard.innerText = `Guess ${attempt} out of ${maxAttempt}`;
  };
// Array of the answers
const hangmanAnswers = [
    "types",
    "operators",
    "functions",
    "events",
    "conditions",
    "loops",
    "objects",
    "arrays",
    "debugging",
    "cookies"
]

let answer = '';
let maxAttempt;
let attempt = 0;
let guesses = [];
let displayWord = [];

// Takes random word out of array with answers
function randomWord() {
    answer = hangmanAnswers[Math.floor(Math.random() * hangmanAnswers.length)];
    maxAttempt = Number(answer.length);
    console.log(answer);
    guessBox();
}


let keyboard = document.getElementById("keyboard");

// Array for the keyboard
let dataSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]

// Takes the strings in the array and makes them to buttons
for (let i = 0; i < dataSet.length; i++) {
    let alphabetBtn = document.createElement("button");
    alphabetBtn.innerHTML = dataSet[i];
    keyboard.appendChild(alphabetBtn);
    alphabetBtn.setAttribute("id", dataSet[i]);
    //Add event listener and sends id with on click
    alphabetBtn.addEventListener("click", (e) => {
        let elementId = e.target.id;
        displayLetter(elementId);
    });
}

//Checks clicked element
function displayLetter(choseLetter) {
    console.log(choseLetter);

    //Goes through array and checks for guessed letter
    for (let i = 0; i < answer.length; i++) {
        if (choseLetter == answer[i]) {
            displayWord[i] = choseLetter;
            outputWord();
            console.log("It works!!");

        } else if (choseLetter != answer[i]) {
            let tempLetter = document.getElementById(choseLetter);

            tempLetter.style.display = "none";
        }

    }
    attempt++;
    scoreboard.innerText = `Guess ${attempt} out of ${maxAttempt}`;
    checkForLoss()
    checkForWin()
}
function outputWord() {
    //Sets word ------

    document.getElementById("sectionP").innerHTML = displayWord.join(" ");
    console.log("guess works");
}

//Creates the underline for guess word
function guessBox() {
    // displayWord = answer.split('').map(letters => (guesses.indexOf(letters) >= 0 ? letters : " _ ")).join('');
    let answerJoin = answer.split("");
    for (let i = 0; i < answerJoin.length; i++) {
        displayWord.push("_");
    }
    outputWord();
}

//Checks if solved
function checkForWin() {
    //String to hold our guess
    let tepmWord = "";
    ///Loop through array
    for (let i = 0; i < displayWord.length; i++) {
        tepmWord += displayWord[i];
    }

    console.log(tepmWord);
    if (tepmWord == answer) {

        console.log("HURRAAY!!")
        winLossText.innerText = "CHAMPION HURRAY!";

    }


}
function checkForLoss() {
    if (attempt == maxAttempt) {
        winLossText.innerHTML = "YOU DIED!";
        keyboard.style.display = "none";

    }
}


// // Shows the defined "maxAttempts" on screen
// document.getElementById("maxAttempt").innerHTML = maxAttempt;

let resetBtn = document.getElementById("resetBtn");

function reset() {
    window.location.reload();



}

resetBtn.addEventListener("click", reset);

randomWord();
// guessBox();


