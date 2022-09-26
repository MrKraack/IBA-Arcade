//Get documents from the DOM
const gridDiv = document.getElementById("lightContainer");

let gridCellArray = document.getElementsByClassName(`gridCell`);

const gridArray = [];

///Generate 25 objects, and push into grid

function createLightObjects() {
    //For loop for each row
    for (let i = 0; i < 5; i++) {
        //for loop for each Column
        for (let j = 0; j < 5; j++) {
            //Create the objects
            let tempObject = {
                x: j,
                y: i
            }
            //push object to array
            gridArray.push(tempObject);            
        }
    }
    console.log(gridArray);
    
    //Append every cell to div "lightContainer"
    for (let i = 0; i < gridArray.length; i++) {
        //Create div for light cell
        let tempCell = document.createElement("button");
        //Add event listener to cell and call checkLight on click
        // tempCell.addEventListener(`click`,checkliight)
        //Give the div x and y coordinates
        tempCell.setAttribute("x",gridArray[i].x);
        tempCell.setAttribute("y",gridArray[i].y);
        //Add a onClick event, that returns ID
        tempCell.setAttribute("onClick","checkLight(this.id)");
        //Give the div an ID
        tempCell.setAttribute("id", `lightCell${i+1}`);
        
        //add cell to div
        gridDiv.appendChild(tempCell).className=`gridCell`;        
    }
    // console.log(gridArray);
    //Grid is made, so now we generate light pattern
    generateLightPattern();
    
}
createLightObjects();

//2. Generate random light pattern
function generateLightPattern() {
    //Add class name to every cell
    for (let i = 0; i < gridCellArray.length; i++) {
        //Random number generator to make pattern
        let rng = Math.round(Math.random())
        //Allocate class based on rng
        if (rng == 1) {
            //Add class gridCell lightOn
            gridCellArray[i].className = "gridCell lightOn";
        } else {
            //Add gridCell lightOff
            gridCellArray[i].className = "gridCell lightOff";
        }
    }
}
function checkLight(clicked_id){
    // console.log(clicked_id);
    //get current object
    let tempCellObject = document.getElementById(clicked_id);
    //Checks lights 
    if (tempCellObject.className == "gridCell lightOn") {
        
        tempCellObject.className = "gridCell lightOff";

        
    }else{
        tempCellObject.className = "gridCell lightOn";
        
    }
    console.log(tempCellObject);
    



}

//4. Check if light and nearby 4 lights are on or off

//5. Add to player score


//Lights out - A 5x5 grid game with lights
//When a field is clicked, the 4 squares next to it turns on/off
//When all lights are off, the player has won
//Score system = How many clicks and how long it took