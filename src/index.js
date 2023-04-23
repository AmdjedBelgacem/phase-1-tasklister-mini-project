//Stretch Deliverables will be added accordingly
document.addEventListener("DOMContentLoaded", () => {
  const task = document.querySelector('#new-task-description');
  const button = document.querySelector('#submit-btn');
  const todo = document.querySelector("#tasks");

  button.addEventListener('click', (event)=>{
    event.preventDefault();
    const adding = task.value;
    const toadd = document.createElement("li");
    toadd.textContent = adding;
    todo.appendChild(toadd);
    task.value="";
  })
});
