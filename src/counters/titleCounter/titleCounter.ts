import { decrementCounter, getCounter, incrementCounter } from '../counter'

export function plusTitleCounter(): void {
  incrementCounter()
  const listCounter: HTMLElement | null =
    document.querySelector('#counterTitle')

  if (listCounter) {
    listCounter.innerHTML = getCounter().toString()
  }
}

export function lessTitleCounter(): void {
  decrementCounter()
  const listCounter: HTMLElement | null =
    document.querySelector('#counterTitle')

  if (listCounter) {
    listCounter.innerHTML = getCounter().toString()
  }
}
