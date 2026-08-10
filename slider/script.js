let image = document.getElementById("image");

let next = document.getElementById("next");

let previous = document.getElementById("previous");


let images = [
    "image/1--1-.avif",
    "image/images.jpg"
];

let index = 0;


next.addEventListener("click", ()=> {

    index = 1;

    image.src = images[index];

});


previous.addEventListener("click", function() {

    index = 0;

    image.src = images[index];

});