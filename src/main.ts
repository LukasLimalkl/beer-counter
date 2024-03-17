import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="main-container">
    <h1 class="title">Ranking Semana 1</h1>
    <div class="container">
        <div class="coluna name">
            <div class="box-title">
                <h2>Name</h2>
            </div>
            <div class="barra"></div>
            <div class="list-name">
                <ul> 
                    <li>Nome 1</li>
                    <div class="barra"></div>
                    <li>Nome 2</li>
                    <div class="barra"></div>
                    <li>Nome 3</li>
                </ul>
            </div>
        </div>
        <div class="coluna beer">
            <div class="box-title">
                <h2>Cervejas Tomadas</h2>
            </div>
            <div class="barra"></div>
            <div class="list-beer">
                <ul> 
                    <li>3</li>
                    <li>5</li>
                    <li>2</li>
                </ul>
            </div>
        </div>
    </div>
  </div>
`

