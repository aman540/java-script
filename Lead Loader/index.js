let myLead = [];
let inputBtn = document.getElementById("input-btn");
const inputText = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn")


tabBtn.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tab) {
        let text = tab[0].url
        inputText.value = text;
        myLead.push(text)
        localStorage.setItem("myLead", JSON.stringify(myLead))
        render(myLead);
        setTimeout(function() {
            inputText.value = "";
        }, 1000)
    })

})



deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLead = [];
    render(myLead);
})

function render(lead) {
    let listItem = "";
    for (let i = 0; i < lead.length; i++) {

        listItem += `
        <li>
        <a href='${lead[i]}' target='_blank'> ${lead[i]} </a>
        </li>`
            // const li = document.createElement("li");
            // li.textContent = myLead[i];
            // ulEl.append(li)
    }
    ulEl.innerHTML = listItem;
}
let leadFromLocalStorage = JSON.parse(localStorage.getItem("myLead"))
if (leadFromLocalStorage) {
    myLead = leadFromLocalStorage;
    render(myLead);
}
inputBtn.addEventListener("click", function() {
    myLead.push(inputText.value);
    inputText.value = "";
    localStorage.setItem("myLead", JSON.stringify(myLead))
    render(myLead);
    console.log(localStorage.getItem("myLead"))
});