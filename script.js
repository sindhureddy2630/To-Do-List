function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
  
    const taskList = document.getElementById("taskList");
  
    const li = document.createElement("li");
  
    li.textContent = taskText;
  
    // Toggle completion on click
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
  
    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent toggle
      li.remove();
    });
  
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  
    taskInput.value = "";
  }