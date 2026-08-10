let buttons = document.querySelectorAll(".tabbtn")

let contents = document.querySelectorAll(".tabcontent")

buttons.forEach(function(button, index) {
button.addEventListener("click", function() {
 contents.forEach(function(content)
  {
content.style.display = "none"

});

 contents[index].style.display = "block"

    });

});