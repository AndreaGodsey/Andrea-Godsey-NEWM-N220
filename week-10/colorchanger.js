/**
 * @type {{ currentColor: String, lastColors: String []}[]}
 *  
 * 
 */



const userColors = [];

/**
 * 
 * @description Gets the color from user input to add to the userColors list
 */



function addNewColorItem(one) {
    const newColorRef = document.getElementById("newColorItem");
    const newColorValue = newColorRef.value;

    userColors.push({ currentColor: newColorValue, lastColor: []});
    newColorRef.value ="#000000"

    showUserColors();
}

/**
 * @description Loops through userColors list and populates them on the page
 */

function showUserColors() {
   const colorSquares = document.getElementById("color-squares");
    colorSquares.innerHTML = "";

    for(let i = 0; i < userColors.length; i++) {
        const userColor = userColors[i];
    colorSquares.innerHTML += `
    <div style="height : 200px; width: 200px; background-color: ${userColor.currentColor}" onclick="openColorChanger(${i})">
    
    <input 
    type="color" 
    id="user-color-${i}" 
    name="user-color-${i}" 
    value="${userColor.currentColor}"
    onchange="changeUserColor(${i})"
    />
    </div>`;
    
    }
}

function changeUserColor(userColorIndex) {
    const userColorRef = document.getElementById(`user-color-${userColorIndex}`);

    const oldLastColors = userColors[userColorIndex].lastColors;
    oldLastColors.push(userColors[userColorIndex].currentColor)
    const newUserColor = {
        currentColor: userColorRef.value,
        lastColor: oldLastColors,
    };
    userColors.splice(userColorIndex, 1, newUserColor);

    showUserColors();
}

function revertUserColor(userColorIndex) {
    const lastColor = userColors[userColorIndex].lastColor;
    if(lastColor,length) {
        const currentColor = lastColor[lastColor.length - 1]
        lastColor.splice(lastColor.length - 1, 1,)
        
        const newUserColor = {
            currentColor: currentColor,
            lastColors: lastColors,
        }
        userColors.splice(userColorIndex, 1, newUserColor);

        showUserColors();
    }
}

function openColorChanger (userColorIndex) {
    console.log(userColorIndex);
    document.getElementById(`user-color-${userColorIndex}`).click();
    
}






