document.querySelectorAll('.dropdown').forEach(dropdown => {
	const value = dropdown.querySelector('.dropdown__value');
	const list = dropdown.querySelector('.dropdown__list');
	value.addEventListener('click', () => {
		list.classList.toggle('dropdown__list_active');
	});

	dropdown.querySelectorAll('.dropdown__link').forEach(link => {
		link.addEventListener('click', (event) => {
			event.preventDefault();
			value.textContent = link.textContent;
			list.classList.remove('dropdown__list_active');
		});
	});

	document.addEventListener('click', (event) => {
		if (!dropdown.contains(event.target)) {
			list.classList.remove('dropdown__list_active');
		}
	});
});
