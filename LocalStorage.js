window.addEventListener("load", function () {

	window.localStorage.loginFirst = "Admin";
	window.localStorage.loginSecond = "admin";

	let userLogin;
	let resetBtn = document.querySelector("#reset");

	resetBtn.addEventListener("click", Reset);

	function Reset() {
		location.reload();
		return false;
	};

	function askLogin() {
		do {
			userLogin = prompt("Введите логин", "Admin");
			if (userLogin !== window.localStorage.loginFirst && userLogin !== window.localStorage.loginSecond) {
				alert("Вы ввели не правильный логин!");
			} else {
				let greeting = document.querySelector("#greeting");
				greeting.style.display = "block";
				let welcome = document.querySelector("#welcome");
				welcome.innerHTML = "Welcome, " + userLogin + "!";
			};
		} while (userLogin !== window.localStorage.loginFirst && userLogin !== window.localStorage.loginSecond);
	};
	askLogin();
});