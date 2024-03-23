import { listTemplate } from './listTemplate'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="main-container">
    <h1 class="title">Ranking Semana 1</h1>
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

