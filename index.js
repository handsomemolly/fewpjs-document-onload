document.addEventListener("DOMContentLoaded", function() {
    // console.log("The DOM has loaded");
    updateText()
});

function updateText() {
let p = document.getElementById("text")
p.textContent = "This is really cool!";
}