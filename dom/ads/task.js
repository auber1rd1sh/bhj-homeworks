function initRotators() {
	const rotators = document.querySelectorAll('.rotator');

	rotators.forEach((rotator) => {
		const cases = rotator.querySelectorAll('.rotator__case');
		let activeIndex = 0;

		function rotateText() {
			cases[activeIndex].classList.remove('rotator__case_active');
			activeIndex = (activeIndex + 1) % cases.length;
			cases[activeIndex].classList.add('rotator__case_active');
		}

		setInterval(rotateText, 1000);
	});
}

initRotators();
  