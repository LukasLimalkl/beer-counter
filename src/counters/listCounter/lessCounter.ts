import { decrementCounter, getCounter } from '../counter'

export function lessCounter(): void {
  decrementCounter()
  const listCounter: HTMLElement | null =
    document.querySelector('#counterElement')

  if (listCounter) {
    listCounter.innerHTML = getCounter().toString()
  }
}
