let containEl = document.querySelector("#contain")
// sets time
let timeEl = $('#time');
console.log(containEl);
containEl.addEventListener("click", function(event) {
    if(event.target.matches("button")){
        console.log(event.target.id)
        console.log(event.target.parentElement.previousElementSibling.value )
        localStorage.setItem(event.target.id, event.target.parentElement.previousElementSibling.value )
    }
}) 

function displayTime() {
    let rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeEl.text(rightNow);
}

setInterval(displayTime, 1000);
function renderLastRegistered() {
    let hours = ["nine", "ten", "eleven", "twelve", "one", "two", "three", "four", "five"]
    
    let hoursPt2 = ["9", "10", "11", "12", "1", "2", "3", "4", "5"]
    
    for (let i = 0; i < 9; i++) {
        let userSubmit = localStorage.getItem(hoursPt2 [i]);
        let textBox = document.getElementById(hours[i]);
        textBox.innerHTML = userSubmit;
    }
}
renderLastRegistered();