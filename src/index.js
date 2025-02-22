let task = document.getElementById("new-task-description");
let taskList = document.getElementById("tasks");
let taskForm = document.getElementById('create-task-form')

taskForm.addEventListener("submit", t => {
  t.preventDefault();
  let newTask = task.value
  takeTaskAndMakeItAnLi(newTask)
  t.target.reset()
})

function takeTaskAndMakeItAnLi(task){
  let newTaskLi = document.createElement("li")
  newTaskLi.innerText = task
  taskList.append(newTaskLi)

  let button = document.createElement("button")
  button.innerText = "x"
  newTaskLi.append(button)
  button.addEventListener("click", () => {
    newTaskLi.remove()
  })
}