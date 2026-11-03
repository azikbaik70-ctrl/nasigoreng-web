const input = document.getElementById('TodoInput')
const list = document.getElementById('todoList')

function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
        alert = ("isi tugas dulu!");
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = '<span onclick="toggleComplete(this)">' + taskText + '</span>' + '<button class = "delete-btn" onclick= "deleteTask(this)">Hapus</button>';
    
    list.appendChild(li);
    input.value = "";
}
function toggleComplete(element) {
    element.parrentElement.classList.toggle('completed');
}
function deleteTask(element) {
    element.parrentElement.remove();
}
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
})
