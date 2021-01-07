const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');
const navBar = document.getElementById('nav-bar');

hamburger.addEventListener('click', () => {
	navUL.classList.toggle('show');
	navBar.classList.toggle('show');
})

	

