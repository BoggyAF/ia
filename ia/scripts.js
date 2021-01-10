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

  var form = document.getElementById('contact-form');
  // var button = document.getElementById("submit");
  var status = document.getElementById('status');
  var email = document.getElementById('email');

  // Functii status

  function success(response) {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
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
      success();
    } else {
      error("Please make sure to enter a valid email adress.");
    };
}

// Home Form Logic


window.addEventListener("DOMContentLoaded", function () {
	var formDiv = document.getElementById('form-div');
	var closeBtn = document.getElementById('btn-close');
	var openBtn = document.getElementById('btn-open');
	var mainText = document.getElementById('main-text');

	closeBtn.addEventListener('click', function () {
		formDiv.style.display = "none";
		mainText.style.transform = "translateY(40%)";
	});

	openBtn.addEventListener('click', function () {
		formDiv.style.display = "block";
		mainText.style.transform = "translateY(13.1%)";
	});
});