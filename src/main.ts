import { listTemplate } from './components/listTemplate'
import { showInput } from './components/showInput'
import {
  lessTitleCounter,
  plusTitleCounter
} from './counters/titleCounter/titleCounter'
import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const increaseButton: HTMLButtonElement | null =
    document.querySelector('#plusTitleCounter')

  if (increaseButton) {
    increaseButton.addEventListener('click', plusTitleCounter)
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const increaseButton: HTMLButtonElement | null =
    document.querySelector('#lessTitleCounter')

  if (increaseButton) {
    increaseButton.addEventListener('click', lessTitleCounter)
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const resetSpan: HTMLSpanElement | null = document.querySelector('#iconReset')

  if (resetSpan) {
    resetSpan.addEventListener('click', () => {
      window.location.reload()
    })
  }
})

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="main-container">
    
    <div class="button-title-box">
        <button class="button-title" id="lessTitleCounter"> - </button>
        <button class="button-title" id="plusTitleCounter"> + </button>
        <span class="icon-span" id="iconReset">
            <img src="../assets/reset.png" alt="Minha Figura" class="reset-icon">
        </span>
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
                ${showInput}
            </div>
        </div>
    </div>
  </div>
`
