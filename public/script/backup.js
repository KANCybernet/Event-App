var todos = [];

function addTodo() {
  var item = document.getElementById("todo").value;

  if (item == "") {
    alert("Field is empty");
  }

  let newTodo = {
    task: item,
    isDone: false,
  };
  
  todos.push(newTodo);

  document.getElementById("todo").value = "";
  console.log(todos);
  var list = document.getElementById("ul");

  for (let i = 0; i < todos.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = todos[i].task
    list.appendChild(li);
  }
}
