// Functie Nav Hamburger

const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');
const navBar = document.getElementById('nav-bar');

hamburger.addEventListener('click', () => {
	navUL.classList.toggle('show');
	navBar.classList.toggle('show');
})




// Functie Form

window.addEventListener("DOMContentLoaded", function () {

  var form = document.getElementById("contact-form");
  // var button = document.getElementById("submit");
  var status = document.getElementById("status");
  var email = document.getElementById("email");

  // Functii status

  function success(response) {
    form.reset();
    status.classList.add("success");
    status.innerHTML = response;
  }

  function error(response) {
    status.classList.add("error");
    status.innerHTML = response;
  }

  // Form Submission Event

  form.addEventListener("submit", function (event) {
	event.preventDefault()
    Post(email, success, error);
  });
});

// Helper Func pt "request"

function Post(data, success, error) {
    if (data.value.includes("@")&&data.value.includes(".")) {
      success("Thanks!");
    } else {
      error("Please make sure to enter a valid email adress.");
    };
}
