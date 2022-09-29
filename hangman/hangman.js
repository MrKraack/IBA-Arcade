// Array of the answers
const hangmanAnswers = [
    "types",
    "operators",
    "functions",
    "DOM",
    "events",
    "conditions",
    "loops",
    "objects",
    "arrays",
    "debugging",
    "cookies"
    ]

    let answer = '';
    let maxAttempt = 8;
    let attempt = 0;
    let guesses = [];
    // let displayWord = null;

    // Takes random word out of array with answers
    function randomWord() {
        answer = hangmanAnswers [Math.floor(Math.random() * hangmanAnswers.length)];
        
    }
    
    
    let keyboard = document.getElementById("keyboard");
    
    // Array for the keyboard
    let dataSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
    
    // Takes the strings in the array and makes them to buttons
    for (let i = 0; i < dataSet.length; i++) {
        let alphabetBtn = document.createElement("button");
        alphabetBtn.innerHTML = dataSet[i];
        keyboard.appendChild(alphabetBtn);
        alphabetBtn.setAttribute("id",i);
        alphabetBtn.addEventListener("click", displayLetter);
        
        
    }

    let newA = document.createElement('p');
    let newB = document.createElement('p');
    let newC = document.createElement('p');
    let newD = document.createElement('p');
    let newE = document.createElement('p');
    let newF = document.createElement('p');
    let newG = document.createElement('p');
    let newH = document.createElement('p');
    let newI = document.createElement('p');
    let newJ = document.createElement('p');
    let newK = document.createElement('p');
    let newL = document.createElement('p');
    let newM = document.createElement('p');
    let newN = document.createElement('p');
    let newO = document.createElement('p');
    let newP = document.createElement('p');
    let newQ = document.createElement('p');
    let newR = document.createElement('p');
    let newS = document.createElement('p');
    let newT = document.createElement('p');
    let newU = document.createElement('p');
    let newV = document.createElement('p');
    let newX = document.createElement('p');
    let newY = document.createElement('p');
    let newZ = document.createElement('p');

    newA.innerHTML = "_"
    newB.innerHTML = "_"
    newC.innerHTML = "_"
    newD.innerHTML = "_"
    newE.innerHTML = "_"
    newF.innerHTML = "_"
    newG.innerHTML = "_"
    newH.innerHTML = "_"
    newI.innerHTML = "_"
    newJ.innerHTML = "_"
    newK.innerHTML = "_"
    newL.innerHTML = "_"
    newM.innerHTML = "_"
    newN.innerHTML = "_"
    newO.innerHTML = "_"
    newP.innerHTML = "_"
    newQ.innerHTML = "_"
    newR.innerHTML = "_"
    newS.innerHTML = "_"
    newT.innerHTML = "_"
    newU.innerHTML = "_"
    newV.innerHTML = "_"
    newX.innerHTML = "_"
    newY.innerHTML = "_"
    newZ.innerHTML = "_"

    newA.append("sectionP");
    newB.append("sectionP");
    newC.append("sectionP");
    newD.append("sectionP");
    newE.append("sectionP");
    newF.append("sectionP");
    newG.append("sectionP");
    newH.append("sectionP");
    newI.append("sectionP");
    newJ.append("sectionP");
    newK.append("sectionP");
    newL.append("sectionP");
    newM.append("sectionP");
    newN.append("sectionP");
    newO.append("sectionP");
    newP.append("sectionP");
    newQ.append("sectionP");
    newR.append("sectionP");
    newS.append("sectionP");
    newT.append("sectionP");
    newU.append("sectionP");
    newV.append("sectionP");
    newX.append("sectionP");
    newY.append("sectionP");
    newZ.append("sectionP");
    

    

    
    function displayLetter(choseLetter) {
        console.log("hey")
        // guesses.indexOf(choseLetter) === -1 ? guesses.push(choseLetter) : null;
        // document.getElementById(choseLetter).setAttribute('disabled', true);
        
        // if (answer.indexOf(choseLetter) >= 0) {
        //     guessBox();
        // }
        // ^ FEJL på setAttibute (kan ikke finde idet fra bogstaverne)
        
    }
    // displayLetter("O");
    
    
    // 
    function guessBox() {
        displayWord = answer.split('').map(letters => (guesses.indexOf(letters) >= 0 ? letters : " _ ")).join('');
        document.getElementById("sectionP").innerHTML = displayWord;
        
    }
    
    
    // Shows the defined "maxAttempts" on screen
    document.getElementById("maxAttempt").innerHTML = maxAttempt;
    
    let resetBtn = document.getElementById("resetBtn");
    
    function reset() {
        
    }
    
    resetBtn.addEventListener("click", reset);
    
    randomWord();
    guessBox();
    
    
    