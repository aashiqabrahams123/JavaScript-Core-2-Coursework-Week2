function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach((element) => {
  let liElement = document.createElement("li");
  liElement.className = "list-group-item d-flex justify-content-between align-items-center";
  liElement.innerHTML = element.task;
  console.log(liElement);

  let spanElement = document.createElement("span");
  spanElement.className = "badge bg-primary rounded-pill";

  let iCheckElement = document.createElement("i");
  iCheckElement.className = "fa fa-check";
  iCheckElement.addEventListener("click", () => {
    if (liElement.style.textDecoration === "none") {
      liElement.style.textDecoration = "line-through";
    } else {
    liElement.style.textDecoration = "none";
    }
  });

  let iDeleteElement = document.createElement("i");
  iDeleteElement.className = "fa fa-delete";
  iDeleteElement.addEventListener("click", () => {
    liElement.remove
  });

  console.log(iDeleteElement);
  console.log(iCheckElement);
  console.log(spanElement);
  liElement.appendChild(iCheckElement);
  spanElement.appendChild(iDeleteElement);
  list.appendChild(liElement);
});
}




    
  

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
