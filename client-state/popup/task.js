const modal = document.getElementById('subscribe-modal');
const closeButton = document.querySelector('.modal__close');

function getCookie(name) {
	const cookies = document.cookie.split('; ');
	
    for (let cookie of cookies) {
		const [key, value] = cookie.split('=');

		if (key === name) {
			return value;
		}
	}
	return null;
}

function setCookie(name, value, days) {
	const date = new Date();
	date.setDate(date.getDate() + days);
	document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

if (!getCookie('modalClosed')) {
	modal.classList.add('modal_active');
}

closeButton.addEventListener('click', () => {
	modal.classList.remove('modal_active');
	setCookie('modalClosed', 'true', 365);
});
