import { getCounter, incrementCounter } from "./counter";

export function titleCounter(): void {
    incrementCounter();
    const listCounter: HTMLElement | null = document.querySelector("#counterTitle");

    if (listCounter) {
        listCounter.innerHTML = getCounter().toString();
    }
}