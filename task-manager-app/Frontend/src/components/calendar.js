document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("calendarContainer");

  const today = new Date().toDateString();
  const card = document.createElement("div");
  card.textContent = `Hoy es ${today} - Aquí se mostrarán tus tareas`;
  card.style.padding = "1rem";
  card.style.background = "#ffffff22";
  card.style.borderRadius = "8px";
  container.appendChild(card);
});
