document.getElementById('viewTasks').addEventListener('click', () => {
  document.getElementById('tasksSection').classList.remove('hidden');
  document.getElementById('calendarSection').classList.add('hidden');
});

document.getElementById('viewCalendar').addEventListener('click', () => {
  document.getElementById('calendarSection').classList.remove('hidden');
  document.getElementById('tasksSection').classList.add('hidden');
});
