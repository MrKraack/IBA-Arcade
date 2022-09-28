//Get the gameboard
let lightContainerEl = document.getElementById("lightContainer");

//Get every div with class name "gridCell"
let gridCellArray = [];

//Make multi array for the board
let gameArray = new Array(5);
for (let i = 0; i < gameArray.length; i++) {
    gameArray[i] = new Array();
}

//Elements for player score
let playerClickEl = document.getElementById(`playerClicks`);
let playerClicks = 0;

function createLights() {
    //Create objects and insert into grid
    //Id for objects
    let objectID = 1;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            //Create every field for 5x5 grid
            let tempObject = {
                x: j,
                y: i,
                id: `lightCell${objectID}`
            }
            //increment the ID
            objectID++;
            //Push object into the grid
            gameArray[i, j].push(tempObject);
        }
    }

    //Create a div for every object
    let tempID = 1;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            //Create the Div
            let tempCell = document.createElement("div");
            //Add random text
            tempCell.innerHTML = "";
            //Add ID
            tempCell.setAttribute("id", `lightCell${tempID}`);
            //Increment the ID            
            tempID++;
            //Add x position as attribute
            tempCell.setAttribute("x", j);
            //Add y position as attribute
            tempCell.setAttribute("y", i);
            //Add click event that returns id
            tempCell.addEventListener(`click`, (e) => {
                // If element has id
                let elementId = e.target.id;
                checkLight(elementId);

            });
            //Add div to the game container
            lightContainerEl.appendChild(tempCell)

            //Add every div to Array
            gridCellArray.push(tempCell);
        }
    }
    setLightsRandom();

}
//Call createLights to initiate everything
createLights();

//Random set LightOn and Off
function setLightsRandom() {

    //Loop through array
    for (let i = 0; i < gridCellArray.length; i++) {
        //Generate random number
        let rng = Math.round(Math.random());
        //If number is 1, then add class lightOn, otherwise add lightOff
        if (rng == 1) {
            gridCellArray[i].className = "gridCell lightOn";
        } else {
            gridCellArray[i].className = "gridCell lightOff";
        }
    }
}

//Check clicked element's light status and call function to check sides
function checkLight(clickedID) {
    //get current element
    let tempDiv = document.getElementById(clickedID);
    //Check if the light is on
    if (tempDiv.className == "gridCell lightOn") {
        //If light is on, turn off light
        tempDiv.className = "gridCell lightOff";
    } else {
        //If light is turned off, turn it on
        tempDiv.className = "gridCell lightOn";
    }
    //Check adjacent lights
    checkRightLight(tempDiv);
    checkLeftLight(tempDiv);
    checkAboveLight(tempDiv);
    checkBelowLight(tempDiv);

    //Increment the player click, and add it to HTML
    playerClicks++;
    playerClickEl.innerHTML = `Clicks: ${playerClicks}`;

    //Start timer, on first click
    if (playerClicks == 1) {
        startTime = Date.now();

    }

    //Check if every light is turned off
    checkWin();
}

//#region Check adjacent lights
function checkRightLight(divObject) {
    //Get the x position from html
    let fooX = Number(divObject.getAttribute("x"));
    let fooY = Number(divObject.getAttribute("y"));
    //check if it's on the edge of gameboard
    if (fooX != 4) {
        //Get object from the array
        let objectToCheck = gameArray[fooX + 1][fooY];
        console.log(`Right Light: position x: ${fooX + 1} - position y: ${fooY}`);
        //Call function to check, if lights are off or on
        checkClassName(objectToCheck);
    } else {
        console.log("You're on the edge of right side, can't check");
    }
}
function checkLeftLight(divObject) {
    //Get the x position from html
    let fooX = Number(divObject.getAttribute("x"));
    let fooY = Number(divObject.getAttribute("y"));
    //check if it's on the edge of gameboard
    if (fooX != 0) {
        //Get object from the array
        let objectToCheck = gameArray[fooX - 1][fooY];
        console.log(`Left Light: position x: ${fooX - 1} - position y: ${fooY}`);
        //Call function to check, if lights are off or on
        checkClassName(objectToCheck);
    } else {
        console.log("You're on the edge of left side, can't check");
    }
}
function checkAboveLight(divObject) {
    //Get the x position from html
    let fooX = Number(divObject.getAttribute("x"));
    let fooY = Number(divObject.getAttribute("y"));
    //check if it's on the edge of gameboard
    if (fooY != 0) {
        //Get object from the array
        let objectToCheck = gameArray[fooX][fooY - 1];
        console.log(`Above Light: position x: ${fooX} - position y: ${fooY - 1}`);
        //Call function to check, if lights are off or on
        checkClassName(objectToCheck);
    } else {
        console.log("You're on the top, can't check above");
    }
}
function checkBelowLight(divObject) {
    //Get the x position from html
    let fooX = Number(divObject.getAttribute("x"));
    let fooY = Number(divObject.getAttribute("y"));
    //check if it's on the edge of gameboard
    if (fooY != 4) {
        //Get object from the array
        let objectToCheck = gameArray[fooX][fooY + 1];
        console.log(`Below Light: position x: ${fooX} - position y: ${fooY + 1}`);
        //Call function to check, if lights are off or on
        checkClassName(objectToCheck);
    } else {
        console.log("You're on the bottom, can't check below");
    }
}
//#endregion

//function to check className and switch light on/off
function checkClassName(divID) {
    //get the object from DOM via ID
    let objectClassCheck = document.getElementById(divID.id);
    //Check if light is on
    if (objectClassCheck.className == "gridCell lightOn") {
        //If light is on, turn it off
        objectClassCheck.className = "gridCell lightOff"
    } else {
        //If light is off, turn it on
        objectClassCheck.className = "gridCell lightOn"
    }


}
//Timer for the game
let startTime;

function checkTime() {
    let timeDifference = Date.now() - startTime;
    let formatted = convertTime(timeDifference);
    document.getElementById('playerTimer').innerHTML = '' + formatted;

}
function convertTime(miliseconds) {
    var totalSeconds = Math.floor(miliseconds / 1000);
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds - minutes * 60;
    return `${minutes}m ${seconds}s`;
}
//Call checkTime every 100milisecond = 1 second
window.setInterval(checkTime, 100);

//Check if all light are turned off
function checkWin() {
    //H2 element used for win text
    let winTextEl = document.getElementById(`winText`);
    //Win condition
    const winCondition = 25;
    //Counter to check win status
    let currentLightsOff = 0;
    //Loop through array to check, if all lights are off
    for (let i = 0; i < gridCellArray.length; i++) {
        if (gridCellArray[i].className == "gridCell lightOff") {
            currentLightsOff++
        }
    }
    //Check if all 25 lights are off
    if (currentLightsOff === winCondition) {
        winTextEl.innerHTML = "CONGRATULATIONS!!! You win!!"

    } else {
        winTextEl.innerHTML = "";
    }

}

console.log(gameArray);
