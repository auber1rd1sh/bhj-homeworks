document.addEventListener('DOMContentLoaded', () => {
	const loader = document.getElementById('loader');
	const itemsContainer = document.getElementById('items');

	fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
		.then(response => {
			if (!response.ok) {
				throw new Error(`Ошибка загрузки данных: ${response.status}`);
			}
			return response.json();
		})
		.then(data => {
			loader.classList.remove('loader_active');

			const currencies = data.response.Valute;

			for (const key in currencies) {
				const currency = currencies[key];

				const item = document.createElement('div');
				item.classList.add('item');

				const code = document.createElement('div');
				code.classList.add('item__code');
				code.textContent = currency.CharCode;

				const value = document.createElement('div');
				value.classList.add('item__value');
				value.textContent = currency.Value.toFixed(2);

				const currencyLabel = document.createElement('div');
				currencyLabel.classList.add('item__currency');
				currencyLabel.textContent = 'руб.';

				item.appendChild(code);
				item.appendChild(value);
				item.appendChild(currencyLabel);

				itemsContainer.appendChild(item);
			}
		})
		.catch(error => {
			console.error('Ошибка:', error);
			loader.classList.remove('loader_active');
			itemsContainer.textContent = 'Не удалось загрузить данные.';
		});
});