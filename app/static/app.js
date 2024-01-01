document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('themeSwitch');
    const body = document.body;

    themeSwitch.addEventListener('change', function() {
        body.classList.toggle('dark-mode', themeSwitch.checked);
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeSwitch.checked = true;
    }
});

window.addEventListener('beforeunload', function() {
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const dueDateInput = document.getElementById('dueDateInput');
const taskList = document.getElementById('taskList');

const addTask = async (title, dueDate) => {
    try {
        const response = await axios.post('/tasks', { title, dueDate });
        const task = response.data.task;

        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';

        const titleSpan = document.createElement('span');
        titleSpan.textContent = task.title;
        listItem.appendChild(titleSpan);

        if (task.dueDate) {
            const dateSpan = document.createElement('span');
            dateSpan.className = 'ml-2 badge badge-secondary';
            dateSpan.textContent = `Inspiração em: ${task.dueDate}`;
            listItem.appendChild(dateSpan);
        }

        const commentForm = document.createElement('form');
        commentForm.innerHTML = `
            <div class="form-group mt-2">
                <input type="text" class="form-control" placeholder="Adicionar Comentário" id="commentInput">
            </div>
            <button type="submit" class="btn btn-info btn-sm">Adicionar Comentário</button>
        `;
        listItem.appendChild(commentForm);

        if (task.completed) {
            listItem.classList.add('task-completed');
        }

        commentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const commentInput = commentForm.querySelector('#commentInput');
            const comment = commentInput.value.trim();

            if (comment) {
                const commentSpan = document.createElement('span');
                commentSpan.className = 'ml-2 badge badge-info';
                commentSpan.textContent = `Comentário: ${comment}`;
                listItem.appendChild(commentSpan);

                commentInput.value = '';
            }
        });

        taskList.appendChild(listItem);
    } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
    }
};

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = taskInput.value.trim();
    const dueDate = dueDateInput.value;
    if (title) {
        addTask(title, dueDate);
        taskInput.value = '';
        dueDateInput.value = '';
    }
});
