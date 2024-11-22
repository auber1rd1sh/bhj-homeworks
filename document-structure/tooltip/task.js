document.addEventListener('DOMContentLoaded', () => {
	const tooltips = document.querySelectorAll('.has-tooltip');

	tooltips.forEach((tooltipElement) => {
		tooltipElement.addEventListener('click', (event) => {
			event.preventDefault();

			const activeTooltip = document.querySelector('.tooltip_active');
			if (activeTooltip) {
				activeTooltip.remove();
				if (activeTooltip === tooltipElement.nextElementSibling) return;
			}

			const tooltipText = tooltipElement.getAttribute('title');
			const tooltip = document.createElement('div');
			tooltip.className = 'tooltip tooltip_active';
			tooltip.textContent = tooltipText;
			document.body.appendChild(tooltip);

			const {
				left,
				top,
				height
			} = tooltipElement.getBoundingClientRect();
			tooltip.style.left = `${left}px`;
			tooltip.style.top = `${top + height}px`;
		});
	});

	document.addEventListener('click', (event) => {
		if (!event.target.classList.contains('has-tooltip')) {
			const activeTooltip = document.querySelector('.tooltip_active');
			if (activeTooltip) activeTooltip.remove();
		}
	});
});
