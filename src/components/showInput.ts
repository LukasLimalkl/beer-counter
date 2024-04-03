import { inputTemplate } from "./inputTemplate";



 function ButtonAction () {
    const addClient = document.querySelector("#input-box") as HTMLDivElement
    if (!addClient) return
    addClient.style.display = "flex";
    console.log("passou do if")

}


document.addEventListener("DOMContentLoaded", () => {
    const showInputButton: HTMLButtonElement | null = document.querySelector("#showInputButton");

    if (showInputButton) {
        showInputButton.addEventListener("click", ButtonAction);
    }
});


export const showInput = `
    <div class="show-box">
        <button class="show-input" id="showInputButton"> Add </button>
        ${inputTemplate}
    </div>
`