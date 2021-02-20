/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { IDiceRoller } from "./dataObject";

/**
 * Render an IDiceRoller into a given div as a text character, with a button to roll it.
 * @param diceRoller - The Data Object to be rendered
 * @param div - The div to render into
 */
export function renderDiceRoller(diceRoller: IDiceRoller, div: HTMLDivElement) {
    const wrapperDiv = document.createElement("div");
    wrapperDiv.style.textAlign = "center";
    div.append(wrapperDiv);

    const diceCharDiv = document.createElement("div");
    diceCharDiv.style.fontSize = "200px";

    const rollButton = document.createElement("button");
    rollButton.style.fontSize = "50px";
    rollButton.textContent = "Roll";
    // Call the roll method to modify the shared data when the button is clicked.
    rollButton.addEventListener("click", diceRoller.roll);

    const sessionEndedButton = document.createElement("button");
    sessionEndedButton.style.fontSize = "50px";
    sessionEndedButton.textContent = "End Session";
    sessionEndedButton.addEventListener("click", diceRoller.endSession);

    const sessionEndedDiv = document.createElement("div");
    sessionEndedDiv.style.fontSize = "50px";
    sessionEndedDiv.style.display = "none";
    sessionEndedDiv.textContent = "Session Ended";

    wrapperDiv.append(diceCharDiv, rollButton, sessionEndedButton,sessionEndedDiv);

    // Get the current value of the shared data to update the view whenever it changes.
    const updateDiceChar = () => {
        // Unicode 0x2680-0x2685 are the sides of a dice (⚀⚁⚂⚃⚄⚅)
        diceCharDiv.textContent = diceRoller.value.toString();
        diceCharDiv.style.color = `hsl(${diceRoller.value * 60}, 70%, 50%)`;

        if(diceRoller.ended) {
            rollButton.disabled = true;
            sessionEndedButton.disabled = true;
            sessionEndedDiv.style.display = "block";
        }
    };
    updateDiceChar();

    // Use the diceRolled event to trigger the rerender whenever the value changes.
    diceRoller.on("update", updateDiceChar);
}
