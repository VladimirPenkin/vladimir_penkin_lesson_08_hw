window.addEventListener("load", function () {

	document.cookie = "loginFirst=Admin";
	document.cookie = "loginSecond=admin";

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
			if (userLogin !== findCookieValue("loginFirst") && userLogin !== findCookieValue("loginSecond")) {
				alert("Вы ввели не правильный логин!");
			} else {
				let greeting = document.querySelector("#greeting");
				greeting.style.display = "block";
				let welcome = document.querySelector("#welcome");
				welcome.innerHTML = "Welcome, " + userLogin + "!";
			};
		} while (userLogin !== findCookieValue("loginFirst") && userLogin !== findCookieValue("loginSecond"));
	};

	function findCookieValue(cookieName) {

		let allCookies = document.cookie;
		let pos = allCookies.indexOf(cookieName + "=");

		if (pos != -1) {
			let start = pos + cookieName.length + 1;
			let end = allCookies.indexOf(";", start);

			if (end == -1) {
				end = allCookies.length;
			};

			let value = allCookies.substring(start, end);
			return decodeURIComponent(value);
		};
	};
	askLogin();
});