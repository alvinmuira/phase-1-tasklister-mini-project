document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector("form");
  form.addEventListener ("submit", e => {
    e.preventDefault();
    runValue(e.target.new_task_description.value);
    e.target.reset();
  });
  function runValue(value) {
    const li = document.createElement(`li`);
    const p = document.createElement(`p`);
    const deleteButton = document.createElement(`button`);
    p.textContent = value;
    deleteButton.textContent = "Done";
    li.appendChild(p);
    li.appendChild(deleteButton);
    const tasks = document.querySelector("#tasks").appendChild(li);
    deleteButton.addEventListener("click", (e) => {
      e.target.parentNode.remove();
    });
  }
});

