const taskList = document.getElementById('taskList');
const taskForm = document.getElementById('taskForm');
const taskModal = document.getElementById('taskModal');
const newTaskBtn = document.getElementById('newTaskBtn');
const closeModal = document.getElementById('closeModal');

newTaskBtn.onclick = () => {
  taskForm.reset();
  taskModal.classList.remove('hidden');
};

closeModal.onclick = () => {
  taskModal.classList.add('hidden');
};

taskForm.onsubmit = async (e) => {
  e.preventDefault();

  const task = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    dueDate: document.getElementById('dueDate').value,
  };

  try {
    const res = await fetch('http://localhost:4000/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    if (res.ok) {
      loadTasks();
      taskModal.classList.add('hidden');
    } else {
      alert(data.msg || 'Error al guardar');
    }
  } catch (err) {
    console.error(err);
    alert('Error de conexión');
  }
};

async function loadTasks() {
  const res = await fetch('http://localhost:4000/api/tasks', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }
  });

  const tasks = await res.json();
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const div = document.createElement('div');
    div.className = 'task-card';
    div.innerHTML = `<h3>${task.title}</h3><p>${task.description}</p><small>${task.dueDate}</small>`;
    taskList.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', loadTasks);
