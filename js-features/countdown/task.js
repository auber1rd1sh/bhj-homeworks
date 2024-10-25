let startValue = parseInt(document.getElementById("timer").textContent);

function func() {
	startValue--;
	document.getElementById("timer").textContent = startValue;

	if (startValue === 0) {
		alert("Вы победили в конкурсе!");
		clearInterval(timerId);
	}
};

let timerId = setInterval(func, 1000);

// Повышенный уровень сложности #1

// let startValue = parseInt(document.getElementById("timer").textContent);

// function formatTime(seconds) {
//     let hours = Math.floor(seconds / 3600);
//     let minutes = Math.floor((seconds % 3600) / 60);
//     let secs = seconds % 60;

//     if (hours < 10) hours = '0' + hours;
//     if (minutes < 10) minutes = '0' + minutes;
//     if (secs < 10) secs = '0' + secs;

//     return ${hours}:${minutes}:${secs};
// }

// function func() {
//     document.getElementById("timer").textContent = formatTime(startValue);

//     if (startValue === 0) {
//         alert("Вы победили в конкурсе!");
//         clearInterval(timerId); 
//     }

//     startValue--; 
// }

// let timerId = setInterval(func, 1000);