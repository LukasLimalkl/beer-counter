import { lessTitleCounter, plusTitleCounter } from './counters/titleCounter/titleCounter';
import { listTemplate } from './listTemplate';
import './style.css';

document.addEventListener("DOMContentLoaded", () => {
    const increaseButton: HTMLButtonElement | null = document.querySelector("#plusTitleCounter");

    if (increaseButton) {
        increaseButton.addEventListener("click", plusTitleCounter);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const increaseButton: HTMLButtonElement | null = document.querySelector("#lessTitleCounter");

    if (increaseButton) {
        increaseButton.addEventListener("click", lessTitleCounter);
    }
});

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="main-container">
    <div class="main-title-box">
        <button class="button-title" id="plusTitleCounter"> + </button>
        <button class="button-title" id="lessTitleCounter"> - </button>
    </div>
    <div class="main-title"> 
        <h1 class="title" >Ranking Semana <h1 id="counterTitle">1</h1> </h1>
    </div>
    <div class="container">
        <div class="coluna">
            <div class="box-title">
                <h2>Nome</h2>
                <h2>Cervejas Tomadas </h2>
            </div>
            <div class="list-container">
                <ul id="ul-container"> 
                    ${listTemplate}
                </ul>
            </div>
        </div>
    </div>
  </div>
`



