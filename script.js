document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');

        // Create a span for the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.addEventListener('click', function() {
            taskSpan.classList.toggle('completed');
        });

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(taskSpan);
        li.appendChild(deleteButton);
        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
});