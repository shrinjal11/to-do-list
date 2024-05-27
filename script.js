document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("tasklist");
    const addTaskButton = document.getElementById("addtaskhere");
    const taskList = document.getElementById("Listoftask");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <span class="delete">&#x1f5d1</span>
            `;
            taskList.appendChild(li);
            taskInput.value = "";


            const deleteButton = li.querySelector(".delete");
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(li);
            });
        }
    });

   
    taskInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            addTaskButton.click();
        }
    });
});
