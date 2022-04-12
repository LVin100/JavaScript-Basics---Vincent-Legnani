let counter=0;
const inc = document.getElementById('inc');
const dec = document.getElementById('dec');
const reset = document.getElementById('reset');

function updateDisplay(a) {
    document.getElementById("counter-label").innerHTML = a;
};

inc.addEventListener('click', function() {
    updateDisplay(++counter)
});


dec.addEventListener('click', function(){
    if(counter>0){
    updateDisplay(--counter);
    } else {
        return;
    }
});

reset.addEventListener('click', function(){
    counter = 0;
    updateDisplay(counter);
});