document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('form');
	const progress = document.getElementById('progress');

	form.addEventListener('submit', (event) => {
		event.preventDefault();

		const fileInput = document.getElementById('file');
		if (fileInput.files.length === 0) {
			alert('Выберите файл для загрузки!');
			return;
		}

		const formData = new FormData(form);
		const xhr = new XMLHttpRequest();

		xhr.upload.onprogress = (event) => {
			if (event.lengthComputable) {
				const progressValue = event.loaded / event.total;
				progress.value = progressValue;
			}
		};

		xhr.onload = () => {
			if (xhr.status === 200) {
				alert('Файл успешно загружен!');
				progress.value = 0;
			} else {
				alert(`Ошибка загрузки: ${xhr.status}`);
			}
		};

		xhr.onerror = () => {
			alert('Произошла ошибка при загрузке файла.');
		};

		xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
		xhr.send(formData);
	});
});