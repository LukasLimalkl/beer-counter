import { inputTemplate } from "./inputTemplate";

const input = document.querySelector("#User") as HTMLInputElement


function ButtonAction () {
    if (!input) return
    console.log("passou do if")
    input.style.display = "flex";


}

export const showInput = `
    <div class="show-box">
        <button onclick(${ ButtonAction()}) class="show-input"> Add </button>
        ${inputTemplate}
    </div>
`