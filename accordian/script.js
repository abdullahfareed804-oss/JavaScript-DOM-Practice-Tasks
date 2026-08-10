let buttons = document.querySelectorAll(".questionbtn")
let answers = document.querySelectorAll(".answer")

answers.forEach(function(answer) {

    answer.style.display = "none"

});

buttons.forEach(function(button, index) {

button.addEventListener("click", function() {
if (answers[index].style.display === "none") {
 answers[index].style.display = "block"

 } else { answers[index].style.display = "none"

        }

 });

});