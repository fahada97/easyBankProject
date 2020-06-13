var check = document.querySelector("#toggle");
var menu = document.getElementById("menu");
var image = document.querySelector(".navbar label img");
console.log(image);


check.addEventListener("change", function(e){
    if(e.target.checked === true){
        menu.style.display = "block";
        image.setAttribute("src", "images/icon-close.svg");
    }
    else{
        menu.style.display ="none";
        image.setAttribute("src", "images/icon-hamburger.svg");
    }
});