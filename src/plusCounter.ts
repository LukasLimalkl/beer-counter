import { getCounter, incrementCounter } from "./counter";

export function plusCounter(): void {
    incrementCounter();
    const listCounter: HTMLElement | null = document.querySelector("#counterElement");

    if (listCounter) {
        listCounter.innerHTML = getCounter().toString();
    }
}