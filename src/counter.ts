let counter: number = 0; 

export function plusCounter() {
    counter++
    const listCounter = document.querySelector("#counterElement");

    if (listCounter) {
        listCounter.innerHTML = counter.toString();
    
}
}