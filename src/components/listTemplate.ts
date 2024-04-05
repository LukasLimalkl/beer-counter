import { lessCounter } from '../counters/listCounter/lessCounter';
import { plusCounter } from '../counters/listCounter/plusCounter';
import { items } from './showInput';

document.addEventListener('DOMContentLoaded', () => {
  const increaseButton: HTMLButtonElement | null =
    document.querySelector('#increaseButton');

  if (increaseButton) {
    increaseButton.addEventListener('click', plusCounter);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const decreaseButton: HTMLButtonElement | null =
    document.querySelector('#decreaseButton');

  if (decreaseButton) {
    decreaseButton.addEventListener('click', lessCounter);
  }
  console.log(items);
});

console.log(items);

export const listTemplate = items
  .map(
    name => `

<div class="list-box"> 
    <li>${name}</li>
    <li id="counterElement">0</li>
    <div class="button-box">
        <button id="decreaseButton" class="button" onclick="myFunction()"> - </button>
        <button id="increaseButton" class="button"> + </button>
    </div>
</div>
`
  )
  .join('');
