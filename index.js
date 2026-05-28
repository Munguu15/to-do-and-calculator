// const newButton = document.createElement("div");
// const newInput = document.createElement("input");
// newButton.innerText = "Намайг дар";

// newButton.style.padding = "10px 20px";
// newButton.style.background = "orange";
// newButton.style.width = "30px";
// newButton.style.border;

// document.body.appendChild(newButton);

function addTask() {
  let taskList = document.getElementById("taskList");
  let inputEl = document.getElementById("taskInput");

  let li = document.createElement("li");

  li.innerText = inputEl.value;
  li.onclick = () => li.remove();

  taskList.appendChild(li);
  inputEl.value = "";
}

function changeColor() {
  let buttonElement = document.getElementById("button");
  let titleElement = document.getElementById("text");
  let bodyElement = document.body;
  let textElement = document.getElementById("textT");
  let taskList = document.getElementById("taskList");
  if (
    bodyElement.style.backgroundColor === "white" ||
    bodyElement.style.backgroundColor === ""
  ) {
    bodyElement.style.backgroundColor = "black";
    bodyElement.style.color = "white";
    textElement.style.color = "black";

    taskList.textContent = "";
    textElement.textContent = "✨ Өнөөдрийн төлөвлөгөө";
    buttonElement.textContent = "Өдөр болгох ☀️";
    titleElement.textContent = "Шөнийн горим";
  } else {
    bodyElement.style.backgroundColor = "white";
    bodyElement.style.color = "black";

    taskList.style.color = "black";
    textElement.style.color = "black";
    buttonElement.textContent = "Шөнө болгох 🌙";
    titleElement.textContent = "Өдрийн горим";
  }
}

