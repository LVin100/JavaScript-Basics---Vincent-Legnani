let counter=0;

const label = document.createElement("div");
document.body.appendChild(label)
label.setAttribute("id", "counter-label");
let t = document.createTextNode("0");
label.appendChild(t);

const container = document.createElement("div");
document.body.appendChild(container);

const inc = document.createElement('button');
inc.setAttribute("id", "inc");
t= document.createTextNode("+");
container.appendChild(inc);
inc.appendChild(t);

const dec = document.createElement('button');
inc.setAttribute("id", "dec");
t= document.createTextNode("-");
container.appendChild(dec);
dec.appendChild(t);

const reset = document.createElement('button');
inc.setAttribute("id", "reset");
t= document.createTextNode("Reset");
container.appendChild(reset);
reset.appendChild(t);


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