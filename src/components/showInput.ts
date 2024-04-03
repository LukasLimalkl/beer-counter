const addClient = document.querySelector(".input-box") as HTMLDivElement

 function ButtonAction() {
    if (!addClient) return;
    addClient.style.display = "flex";
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
        <div class="input-box" style="display: none;">
            <label>Click me <input type="text" id="User" name="Name" class="input-client" /></label>
        </div>
    </div>
`