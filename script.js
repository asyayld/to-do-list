const input = document.getElementById("todoInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("todoList");

button.addEventListener("click", addTodo);

function addTodo() {
  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "✖";
  deleteBtn.className = "delete";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
}
function addTodo() {
  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  // Tıklanınca üstünü çiz
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "✖";
  deleteBtn.className = "delete";

  // Silme butonu
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // üstünü çizmesin
    li.remove();
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
}
