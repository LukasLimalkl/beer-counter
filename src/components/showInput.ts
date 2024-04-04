document.addEventListener('DOMContentLoaded', () => {
  const addClient: HTMLElement | null = document.getElementById('hide');

  function ButtonAction() {
    if (!addClient) return;

    if (addClient.style.display == 'flex') {
      addClient.style.display = 'none';
    } else {
      addClient.style.display = 'flex';
    }
  }

  const showInputButton: HTMLButtonElement | null =
    document.querySelector('#showInputButton');

  if (showInputButton) {
    showInputButton.addEventListener('click', ButtonAction);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const items: Array<string> = [];

  const inputValue = document.querySelector(
    '.input-client'
  ) as HTMLInputElement | null;
  const addClientButton = document.querySelector('.add-button');

  function AddName() {
    if (!inputValue || !inputValue.value.trim()) return;
    const value = inputValue.value.trim();

    items.push(value);
    console.log(items);
    inputValue.value = ''; // Limpa o campo de entrada após adicionar o cliente
  }

  if (addClientButton) {
    addClientButton.addEventListener('click', AddName);
  }
});

export const showInput = `
    <div class="show-box">
        <button class="show-input" id="showInputButton"> Novo Jogador </button>
        <div class="input-box" id="hide" >
             <input type="text" id="User" name="Name" class="input-client" />
             <button class="add-button"> Adicionar nome </button>
        </div>
    </div>
`;
