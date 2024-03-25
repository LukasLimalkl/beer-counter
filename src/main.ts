import { listTemplate } from './listTemplate';
import './style.css';
import { titleCounter } from './titleCounter';

document.addEventListener("DOMContentLoaded", () => {
    const increaseButton: HTMLButtonElement | null = document.querySelector("#titleCounter");

    if (increaseButton) {
        increaseButton.addEventListener("click", titleCounter);
    }
});

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="main-container">
    <button class="button-title" id="titleCounter"> Outra Semana </button>
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



