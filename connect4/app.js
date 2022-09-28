// Jeg definerer de nødvendige HTML dom elementer for at få startet mit spil
let connect = document.getElementById("connect-container");
let startGameBtn = document.getElementById("startGameBtn");
let turnsText = document.getElementById("turns");

let gameRunning = false;

// Jeg bruger det her variabel til at finde ud af hvilken spillers tur det er. "1" er spiller og "2" er spiller 2
let player = 1;

// Definerer "slot" variablen (brikkerne)
var slots;

// Hvor mange runder der er blevet spillet
let turns = 0;

// Knappen der starter gamet
startGameBtn.addEventListener("click", startGame);

// Løsninger/wins (Det er ikke noget jeg selv har fundet ud af). Den tjekker alt fra horizontale/vertikale og diagonale løsninger.
const solutions = [
  [0, 1, 2, 3],
  [41, 40, 39, 38],
  [7, 8, 9, 10],
  [34, 33, 32, 31],
  [14, 15, 16, 17],
  [27, 26, 25, 24],
  [21, 22, 23, 24],
  [20, 19, 18, 17],
  [28, 29, 30, 31],
  [13, 12, 11, 10],
  [35, 36, 37, 38],
  [6, 5, 4, 3],
  [0, 7, 14, 21],
  [41, 34, 27, 20],
  [1, 8, 15, 22],
  [40, 33, 26, 19],
  [2, 9, 16, 23],
  [39, 32, 25, 18],
  [3, 10, 17, 24],
  [38, 31, 24, 17],
  [4, 11, 18, 25],
  [37, 30, 23, 16],
  [5, 12, 19, 26],
  [36, 29, 22, 15],
  [6, 13, 20, 27],
  [35, 28, 21, 14],
  [0, 8, 16, 24],
  [41, 33, 25, 17],
  [7, 15, 23, 31],
  [34, 26, 18, 10],
  [14, 22, 30, 38],
  [27, 19, 11, 3],
  [35, 29, 23, 17],
  [6, 12, 18, 24],
  [28, 22, 16, 10],
  [13, 19, 25, 31],
  [21, 15, 9, 3],
  [20, 26, 32, 38],
  [36, 30, 24, 18],
  [5, 11, 17, 23],
  [37, 31, 25, 19],
  [4, 10, 16, 22],
  [2, 10, 18, 26],
  [39, 31, 23, 15],
  [1, 9, 17, 25],
  [40, 32, 24, 16],
  [9, 17, 25, 33],
  [8, 16, 24, 32],
  [11, 17, 23, 29],
  [12, 18, 24, 30],
  [1, 2, 3, 4],
  [5, 4, 3, 2],
  [8, 9, 10, 11],
  [12, 11, 10, 9],
  [15, 16, 17, 18],
  [19, 18, 17, 16],
  [22, 23, 24, 25],
  [26, 25, 24, 23],
  [29, 30, 31, 32],
  [33, 32, 31, 30],
  [36, 37, 38, 39],
  [40, 39, 38, 37],
  [7, 14, 21, 28],
  [8, 15, 22, 29],
  [9, 16, 23, 30],
  [10, 17, 24, 31],
  [11, 18, 25, 32],
  [12, 19, 26, 33],
  [13, 20, 27, 34],
]

// Funktionen der starter hele spillet
function startGame() {
  gameRunning = true;
  let name1 = document.getElementById("name1").value;
  let name2 = document.getElementById("name2").value;
  if (name1 === "" || name2 === "") {
    alert("Enter a name for both players!");
  } 
  else {
// Initialiserer timeren
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let timer = document.getElementById("timer");
    let timerIsRunning = true;
    // Funktionen der starter stopuret
    function stopWatch() {
      // Det her bruger jeg til at kunne stoppe timeren
      if (timerIsRunning === true) {
      timer.innerHTML = `${hours} hour(s) ${minutes} minute(s) ${seconds} second(s)`;
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes >=60) {
        seconds = 0;
        minutes = 0;
        hours++;
      }
    }
  }
    setInterval(stopWatch, 1000);
    stopWatch()

    // Tegner "brættet" og giver det nogle passende attributter som jeg bruger senere
    let preStart = document.getElementById("preStart");
    preStart.classList.add("removeBtnPlayer")
    let connectContainer = document.getElementById("connect-container")
    connectContainer.style.display = "grid";

    for (let i = 0; i < 42; i++) {
      let div = document.createElement("div");
      div.setAttribute("slot-id", i);
      div.className = "slot";
      connectContainer.appendChild(div);
    }
    // Her laver jeg nogle usynlige "brikker" som jeg bruger til at starte spillet på.
    for (let i = 42; i < 49; i++) {
      let divTaken = document.createElement("div")
      divTaken.setAttribute("slot-id", i);
      divTaken.className = "taken";
      connectContainer.appendChild(divTaken);
    }
    // Definerer runde counteren
    turnsText.innerHTML = `${turns} Rounds Played`;
    // Laver et forEach loop der tjekker hvor mange "elementer" der ligger i "slots"-variablet og tilføjer noget funktion til dem
    slots = document.querySelectorAll('.slot, .taken');
    slots.forEach((slot, i) => {
      slot.addEventListener("click", () => {
        if (gameRunning === false) {
          return;
        }
        if (slot.classList.contains("taken")) {
          connectContainer.classList.remove("error")
          // offsetWidth bliver brugt som et slags "buffer", så koden ikke bliver udføret instantly (async?)
          connectContainer.offsetWidth;
          connectContainer.classList.add("error")
          return;
        }
    // Grunden til at vi har de usynlige brikker i starten er nemlig derfor. Hvis vi ikke havde dem, vil vi aldrig kunne starte spillet, da de usynlige brikker har classen taken og derfor giver os mulighed for at smide vores brikker ind på brættet.
    // Hvis selve "i + 7 (fordi der er 7 felter på hver kolonne)" (det felt vi klikker på) har classen "taken", og hvis "i" ikke har den, så kører koden. Altså, hvis vores "felt" er "taken", så vi vil vi kun kunne placere en brik over det felt, der er taken.
        if (slots[i + 7].classList.contains('taken') &&!slots[i].classList.contains('taken')) {
        let color;
        // Spiller 1
        if (player === 1) {
          player = 2;
          color = "red";
        }
        // Spiller 2
        else {
          player = 1;
          color = "yellow";
        }
        slots[i].classList.add(color, "taken");
        turns++;
        turnsText.innerHTML = `${turns} Rounds Played`;
        winner();
      }
      else {
        connectContainer.classList.remove("error")
        // offsetWidth bliver brugt som et slags "buffer", så koden ikke bliver udføret instantly (async?)
        connectContainer.offsetWidth;
        connectContainer.classList.add("error")
      }
    })
  })

    // Funktionen der tjekker om en spiller har vundet
    function winner() {
    let winner = document.getElementById("winner");
    let winnerContainer = document.getElementById("winnerContainer");
    let container = document.getElementById("container");
    let restart = document.getElementById("restart");
    // Et loop der kører igennem og definerer nogle konstanter som vi bruger til at finde ud af om spilleren har vundet
    for (let y = 0; y < solutions.length; y++) {
      const slot1 = slots[solutions[y][0]];
      const slot2 = slots[solutions[y][1]];
      const slot3 = slots[solutions[y][2]];
      const slot4 = slots[solutions[y][3]];
  
      // Tjek om "rød" har vundet
      if (
        slot1.classList.contains('red') &&
        slot2.classList.contains('red') &&
        slot3.classList.contains('red') &&
        slot4.classList.contains('red')
      )
      {
        slot1.classList.add("blinkAnim")
        slot2.classList.add("blinkAnim")
        slot3.classList.add("blinkAnim")
        slot4.classList.add("blinkAnim")
        gameRunning = false;
        // Pausen funktionen så den ikke kører det absolut samme sekund man vinder på så man lige kan se boardet (virker ikke super godt)
        // Stopper timeren
        timerIsRunning = false;
        setTimeout(() => {
        winnerContainer.style.display = "flex";
        winnerContainer.classList.add("fade");
        winner.style.display = "block";
        winner.innerHTML = `${name1} wins!`;
        container.classList.add("winnerEffect")
        timer.innerHTML = `The game finished in: ${hours} hour(s) ${minutes} minute(s) ${seconds} second(s)`;
      },2000)
    }
      // Tjek om "gul" har vundet
      if (
        slot1.classList.contains('yellow') &&
        slot2.classList.contains('yellow') &&
        slot3.classList.contains('yellow') &&
        slot4.classList.contains('yellow')
      )
      {
        slot1.classList.add("blinkAnim")
        slot2.classList.add("blinkAnim")
        slot3.classList.add("blinkAnim")
        slot4.classList.add("blinkAnim")
        gameRunning = false;
        // Stopper timeren
        timerIsRunning = false;
        setTimeout(() => {
        winnerContainer.style.display = "flex";
        winnerContainer.classList.add("fade");
        winner.style.display = "block";
        winner.innerHTML = `${name2} wins!`;
        container.classList.add("winnerEffect")
        timer.innerHTML = `Final Time: ${hours} hour(s) ${minutes} minute(s) ${seconds} second(s)`;
      },2000)
    }
        restart.addEventListener("click", () => {
        window.location.reload();
    })
    }
  }
  }
}
