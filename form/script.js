let form = document.getElementById("myForm")

let name = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("password");

let message = document.getElementById("message");

form.addEventListener("submit", function(event) {

 event.preventDefault();

if (name.value === "") {
     message.textContent = "please enter your name"
      }

 else if (email.value === "") {
        message.textContent = "enter your email"
    }

    else if (password.value === "") {
        message.textContent = " enter your password"
    }
    else {
        message.textContent = "form submitted successfully"
  }

})

