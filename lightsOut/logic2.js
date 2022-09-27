//Get the gameboard
let gameContainer = document.getElementById("lightContainer");

//Make multi array for the board
let gameArray = new Array(5);
for (let i = 0; i < gameArray.length; i++) {
    gameArray[i] = new Array(5);
}


//Create objects and insert into grid
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        //Create every field for 5x5 grid
        let tempObject = {
            x: j,
            y: i,
        }
        //Push object into the grid
        gameArray[i,j].push(tempObject);
    }
}

//Create a div for every object
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        let tempCell = document.createElement("div");
        tempCell.innerHTML = "hi";
        gameContainer.appendChild(tempCell).className="gridCell lightOn";
    }


}

//Random set LightOn and Off
function setLightsRandom(){
    //Generate random number
    let rng = Math.round(Math.random());
    //Loop through array
    for (let i = 0; i < gameArray.length; i++) {
        for (let j = 0; j < gameArray[i].length; j++) {
            console.log(`this is ${gameArray[j]}`);

        }
             
    }

}
setLightsRandom();

console.log(gameArray);
