var todos = []

function addTodo() {
  var item = document.getElementById("todo").value;

  if (item == "") {
    alert("Field is empty")
  }
  document.getElementById("todo").value = ""
  var lists = document.getElementById("ul")

  var li = document.createElement("li")
  var btn = document.createElement("button")
  var span = document.createElement("span")
  var span2 = document.createElement("span")
  var input = document.createElement("input")
  input.setAttribute("type", "checkbox")

  span.innerHTML = "X"
  btn.appendChild(span)
  li.appendChild(input)
  span2.innerHTML = inputText 
  li.appendChild(span2)
  li.appendChild(btn)
  lists.appendChild(li)
  
}

// function makeFunction(inputText){
//   var li = document.createElement("li")
//   var btn = document.createElement("button")
//   var span = document.createElement("span")
//   var span2 = document.createElement("span")
//   var input = document.createElement("input")
//   input.setAttribute("type", "checkbox")

//   span.innerHTML = "X"
//   btn.appendChild(span)
//   li.appendChild(input)
//   span2.innerHTML = inputText 
//   li.appendChild(span2)
//   li.appendChild(btn)
//   lists.appendChild(li)
// }
