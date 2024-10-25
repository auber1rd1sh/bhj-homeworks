let deadCount = 0;
let lostCount = 0;

for (let i = 1; i <= 9; i++) {
	const hole = document.getElementById(`hole${i}`);

	hole.onclick = function() {
		if (hole.classList.contains('hole_has-mole')) {
			deadCount++;
			document.getElementById('dead').textContent = deadCount;
		} else {
			lostCount++;
			document.getElementById('lost').textContent = lostCount;
		}

		if (deadCount >= 10) {
			alert('Вы победили!');
			resetGame();
		} else if (lostCount >= 5) {
			alert('Вы проиграли!');
			resetGame();
		}
	};
}

function resetGame() {
	deadCount = 0;
	lostCount = 0;
	document.getElementById('dead').textContent = deadCount;
	document.getElementById('lost').textContent = lostCount;
}