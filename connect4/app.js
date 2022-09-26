let connect = document.getElementById("connect-container");
let startGameBtn = document.getElementById("startGameBtn");

function startGame() {
  let name1 = document.getElementById("name1").value;
  let name2 = document.getElementById("name2").value;
  if (name1.length === 0 && name2.length === 0) {
    alert("Enter a name for both players!");
  } else {
    let preStart = document.getElementById("preStart");
    preStart.classList.add("removeBtnPlayer")
    let boxDiv = document.createElement("boxDiv");
    boxDiv.className = "boxDiv";
    connect.appendChild(boxDiv);
    for (let i = 0; i < 42; i++) {
      let div = document.createElement("div");
      div.setAttribute("slot-id", i);
      div.className = "slot";
      boxDiv.appendChild(div);
    }
  }
}
