import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="main-container">
    <h1 class="title" > Ranking Semana 1 </h1>
    <div class="container">
        <div class="coluna name">
            <h2>Nome</h2>
            <p></p>
        </div>
        <div class="coluna beer">
            <h2>Cervejas Tomadas</h2>
            <p></p>
        </div>
    </div>
  </div>
`

