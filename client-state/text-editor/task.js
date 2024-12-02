const editor = document.getElementById('editor');

window.addEventListener('load', () => {
	const savedText = localStorage.getItem('editorContent');
	if (savedText !== null) {
		editor.value = savedText;
	}
});

editor.addEventListener('input', () => {
	localStorage.setItem('editorContent', editor.value);
});
