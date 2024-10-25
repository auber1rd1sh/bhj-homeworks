let counter = parseInt(document.getElementById("clicker__counter").textContent);

const cookie = document.getElementById("cookie");
cookie.onclick = function() {
	counter++;
	document.getElementById("clicker__counter").textContent = counter;

	if (counter % 2 === 0) {
		cookie.width = 220;
		cookie.height = 150;
	} else {
		cookie.width = 180;
		cookie.height = 120;
	}
}