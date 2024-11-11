document.addEventListener('DOMContentLoaded', () => {
	const tabsContainers = document.querySelectorAll('.tabs');

	tabsContainers.forEach((tabsContainer) => {
		const tabs = Array.from(tabsContainer.querySelectorAll('.tab'));
		const contents = Array.from(tabsContainer.querySelectorAll('.tab__content'));

		tabs.forEach((tab, index) => {
			tab.addEventListener('click', () => {
				tabs.forEach((t) => t.classList.remove('tab_active'));
				contents.forEach((content) => content.classList.remove('tab__content_active'));

				tab.classList.add('tab_active');
				contents[index].classList.add('tab__content_active');
			});
		});
	});
});
  