document.addEventListener('DOMContentLoaded', () => {
	const taskInput = document.getElementById('task__input');
	const taskList = document.getElementById('tasks__list');
	const taskForm = document.getElementById('tasks__form');

	taskForm.addEventListener('submit', (event) => {
		event.preventDefault();

		const taskText = taskInput.value.trim();
		if (taskText !== '') {
			addTask(taskText);
			taskInput.value = '';
		}
	});

	function addTask(taskText) {
		const taskElement = document.createElement('div');
		taskElement.className = 'task';

		const taskTitle = document.createElement('div');
		taskTitle.className = 'task__title';
		taskTitle.textContent = taskText;

		const taskRemove = document.createElement('a');
		taskRemove.className = 'task__remove';
		taskRemove.href = '#';
		taskRemove.innerHTML = '&times;';

		taskRemove.addEventListener('click', (event) => {
			event.preventDefault();
			taskElement.remove();
		});

		taskElement.appendChild(taskTitle);
		taskElement.appendChild(taskRemove);
		taskList.appendChild(taskElement);
	}
});
