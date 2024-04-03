document.addEventListener('DOMContentLoaded', () => {
  const addClient: HTMLElement | null = document.getElementById('hide')

  function ButtonAction() {
    console.log(addClient)
    if (!addClient) return
    console.log('dps')

    addClient.style.display = 'flex'
  }

  const showInputButton: HTMLButtonElement | null =
    document.querySelector('#showInputButton')

  if (showInputButton) {
    showInputButton.addEventListener('click', ButtonAction)
  }
})

export const showInput = `
    <div class="show-box">
        <button class="show-input" id="showInputButton"> Add </button>
        <div class="input-box" id="hide" >
            <label>Click me <input type="text" id="User" name="Name" class="input-client" /></label>
        </div>
    </div>
`
