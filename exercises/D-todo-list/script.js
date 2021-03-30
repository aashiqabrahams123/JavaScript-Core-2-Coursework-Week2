function todoList(todos) {
  // Write your code here...
  
  let content = document.getElementById('content');
let ul = document.createElement('ul');

todos.forEach(val => {
  let li = document.createElement('li');
  li.innerHTML = val.todo;
  li.addEventListener('click', e => {
    if(e.target.style.textDecoration === 'line-through') {
      e.target.style.textDecoration = 'none'
    } else {
      e.target.style.textDecoration = 'line-through';
    }
  })
  ul.append(li);
})
  content.append(ul); 
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);