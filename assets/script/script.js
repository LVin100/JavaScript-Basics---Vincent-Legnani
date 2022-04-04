var counter = 0;

function increment() {
    updateDisplay(++counter);
}

function decrement() {
    if(counter>0){
    updateDisplay(--counter);
    } else {
        return;
    }
}

function resetCounter() {
    counter = 0;
    updateDisplay(counter);
}

function updateDisplay(a) {
    document.getElementById("counter-label").innerHTML = a;
}