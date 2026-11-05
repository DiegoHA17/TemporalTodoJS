window.onload = function() {
let div = this.document.querySelector("div");
let p = this.document.querySelector("p");
let button = this.document.querySelector("button");

div.addEventListener("click", function(event) {
    console.log("Click en div");
});

p.addEventListener("click", function(event) {
    console.log("Click en p");
    event.stopPropagation();
});

button.addEventListener("click", function(event) {
    console.log("Click en button");
    event.stopPropagation();
});}