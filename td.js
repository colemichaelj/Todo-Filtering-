
   let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }]

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  const populateTodos = () => {
      

        // create a new div element 
        var newDiv = document.createElement("li"); 
        // and give it some content 
        var newContent = document.createTextNode(arrayOfTodos.title); 
        // add the text node to the newly created div
        newDiv.appendChild(newContent);  
      
        // add the newly created element and its content into the DOM 
        var currentDiv = document.getElementById("todo-list"); 
  }
  console.log(arrayOfTodos[0].userId) // => 14
  console.log(arrayOfTodos[1].userId) // => 20   // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.
  