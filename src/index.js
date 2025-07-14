document.addEventListener('DOMContentLoaded', () => {
const form = document.querySelector("#create-task-form");
const input = document.querySelector("#new-task-description");
const taskList = document.querySelector("#tasks");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskText = input.value;
  if (!taskText) return;
  const li = document.createElement("li");
  li.textContent = taskText;
  taskList.appendChild(li);
  input.value = "";
});
});

