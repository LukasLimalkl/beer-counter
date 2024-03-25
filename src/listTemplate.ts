import { lessCounter } from "./counters/listCounter/lessCounter";
import { plusCounter } from "./counters/listCounter/plusCounter";

document.addEventListener("DOMContentLoaded", () => {
    const increaseButton: HTMLButtonElement | null = document.querySelector("#increaseButton");

    if (increaseButton) {
        increaseButton.addEventListener("click", plusCounter);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const decreaseButton: HTMLButtonElement | null = document.querySelector("#decreaseButton");

    if (decreaseButton) {
        decreaseButton.addEventListener("click", lessCounter);
    }
});

export const listTemplate = `
    <div class="list-box"> 
        <li>Nome 1</li>
        <li id="counterElement">0</li>
        <div class="button-box">
            <button id="decreaseButton" class="button" onclick="myFunction()"> - </button>
            <button id="increaseButton" class="button"> + </button>
        </div>
    </div>
`;

