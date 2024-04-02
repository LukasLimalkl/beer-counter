import { inputTemplate } from "./inputTemplate";



function ButtonAction (e: Event) {

    const input = document.querySelector("#User") as HTMLInputElement

    if (input){
        console.log("botao sendo pressionado", e)
        input.style.display = "flex"
    }

}

export const showInput = `
    <div class="show-box">
        <button onclick(${ ButtonAction()}) class="show-input"> Add </button>
        ${inputTemplate}
    </div>
`