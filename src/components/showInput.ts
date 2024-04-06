import { lessCounter } from '../counters/listCounter/lessCounter';
import { plusCounter } from '../counters/listCounter/plusCounter';

const items: Array<string> = [];

document.addEventListener('DOMContentLoaded', () => {
  const addClient: HTMLElement | null = document.getElementById('hide');
  const showInputButton: HTMLButtonElement | null =
    document.querySelector('#showInputButton');
  const increaseButton: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll('.increaseButton');
  const decreaseButton: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll('.decreaseButton');
  const inputValue = document.querySelector(
    '.input-client'
  ) as HTMLInputElement | null;
  const addClientButton = document.querySelector('.add-button');

  if (showInputButton) {
    showInputButton.addEventListener('click', ButtonAction);
  }

  if (addClientButton) {
    addClientButton.addEventListener('click', AddName);
  }

  increaseButton.forEach(button => {
    button.addEventListener('click', plusCounter);
  });

  decreaseButton.forEach(button => {
    button.addEventListener('click', lessCounter);
  });

  function ButtonAction() {
    if (!addClient) return;

    addClient.style.display =
      addClient.style.display === 'flex' ? 'none' : 'flex';
  }

  function AddName() {
    if (!inputValue || !inputValue.value.trim()) return;
    const value = inputValue.value.trim();

    items.push(value);
    inputValue.value = ''; // Limpa o campo de entrada após adicionar o cliente
  }

  console.log(items);
});

const listTemplate = items
  .map(
    name => `
<div class="list-box"> 
    <li>${name}</li>
    <li class="counterElement">0</li>
    <div class="button-box">
        <button class="decreaseButton button"> - </button>
        <button class="increaseButton button"> + </button>
    </div>
</div>
`
  )
  .join('');

export const listContainer = `
<div class="list-container">
<ul id="ul-container"> 
    ${listTemplate}
</ul>
<div class="show-box">
        <button class="show-input" id="showInputButton"> Novo Jogador </button>
        <div class="input-box" id="hide" >
             <input type="text" id="User" name="Name" class="input-client" />
             <button class="add-button"> Adicionar nome </button>
        </div>
    </div>
</div>`;
