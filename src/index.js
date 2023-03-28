document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault(); // To prevent the form from submitting normally

    const taskText = taskInput.value.trim(); // To get the task description from the input field
    if (taskText) {
      // To create a new list item for the task and append it to the list
      const taskItem = document.createElement("li");
      taskItem.innerText = taskText;
      taskList.appendChild(taskItem);

      // To create a delete button for the task and append it to the item
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "x";
      deleteButton.addEventListener("click", () => {
        taskItem.remove(); // To remove the task item when the delete button is clicked
      });
      taskItem.appendChild(deleteButton);

      taskInput.value = ""; // To clear the input field
    }
  });
});
