// document.getElementById("increment-btn").addEventListener("onclick", increment);
let count = 0;
let display = document.getElementById("count-el")
let entry = document.getElementById("previous-entry")
let previous_entry = []

function increment() {
    count++;
    display.innerHTML = count;
}

function decrement() {
    if (count > 0) {
        count--;
    }
    display.innerHTML = count;
}
let arr = []


function dis() {
    display.innerHTML = count;
}

function save() {
    previous_entry.push(count);
    count = 0;
    dis();
}

function record() {
    let text = "";
    for (let i = 0; i < previous_entry.length; i++) {
        text = text + previous_entry[i] + " - "

    }
    entry.innerHTML = text;

}