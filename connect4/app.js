// Jeg definerer de nødvendige HTML dom elementer for at få startet mit spil
let connect = document.getElementById("connect-container");
let startGameBtn = document.getElementById("startGameBtn");
let turnsText = document.getElementById("turns");

// Jeg bruger de her konstanter til at finde ud af hvilken spillers tur det er
let player1 = 1;
let player2 = 0;

// Hvor mange runder der er blevet spillet
let turns = 0;

function startGame() {
  turnsText.innerHTML = `${turns} ture spillet`;
  let name1 = document.getElementById("name1").value;
  let name2 = document.getElementById("name2").value;
  if (name1 === "" || name2 === "") {
    alert("Enter a name for both players!");
  } 
  else {
    let preStart = document.getElementById("preStart");
    preStart.classList.add("removeBtnPlayer")
    let connectContainer = document.getElementById("connect-container")

    for (let i = 0; i < 42; i++) {
      let div = document.createElement("div");
      div.setAttribute("slot-id", i);
      div.className = "slot";
      connectContainer.appendChild(div);
    }
    var slots = document.querySelectorAll('.slot');
    // Jeg laver et forEach loop der tjekker hvor mange "elementer" der ligger i "slots"-variablet og tilføjer noget funktion til dem

    slots.forEach((slot) => {
      slot.addEventListener("click", () => {
        if (slot.classList.contains("red") || slot.classList.contains("yellow")) {
          alert("Space is already occupied!")
          return;
        }
        let color;
        if (player1 === 1) {
          player1 = 0;
          color = "red"
          player2 = 1;
          console.log(1)
        }
        else {
          player1 = 1;
          color = "yellow";
          player2 = 0;
        }
        console.log({player2, player1})
        console.log(color)

        slot.classList.add(color);
        turns++;
        turnsText.innerHTML = `${turns} ture spillet`;
        console.log(turns)
      })
    })
  
  }

let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = document.getElementById("timer");

function stopWatch() {
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
setInterval(stopWatch, 1000);
stopWatch()

}