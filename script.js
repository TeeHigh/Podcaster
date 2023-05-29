const xMark = document.querySelector(".fa-xmark");
const bars = document.querySelector(".fa-bars");
const ul = document.getElementById("ul");
const home = document.getElementById("home");

bars.addEventListener("click", function(){
    ul.style.top = "0";
})
xMark.addEventListener("click", function(){
    ul.style.top = "-100%";
})

window.onload = () => {
    home.classList.add("active")
    
}

var a = document.querySelectorAll("#ul a");
            for (var i = 0, length = a.length; i < length; i++) {
                a[i].onclick = function() {
                    var b = document.querySelector("#ul li.active");
                    if (b) b.classList.remove("active");
                    this.parentNode.classList.add('active');
                };
            }