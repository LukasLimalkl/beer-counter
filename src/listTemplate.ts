import { plusCounter } from "./plusCounter";

document.addEventListener("DOMContentLoaded", () => {
    const increaseButton: HTMLButtonElement | null = document.querySelector("#increaseButton");

    if (increaseButton) {
        increaseButton.addEventListener("click", plusCounter);
    }
});

export const listTemplate = `
    <div class="list-box"> 
        <li>Nome 1</li>
        <li id="counterElement">0</li>
        <div class="button-box">
            <button class="button" onclick="myFunction()"> - </button>
            <button id="increaseButton" class="button"> + </button>
        </div>
    </div>
`;

