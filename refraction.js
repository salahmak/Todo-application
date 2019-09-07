//Read and parse existing data in local storage
const getSavedTodos = function() {
    const todoJSON = localStorage.getItem('todo');

    if (todoJSON !== null) {
    return JSON.parse(todoJSON)
    } else {
        return []
    }
}

// save the todos in locale storage
const saveTodos = function(todos) {
    localStorage.setItem('todo', JSON.stringify(todos))
}

// Render todos 
let renderTodos = function(todos, filters) {
    let filteredTodo = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.text.toLowerCase());
    })

    filteredTodo = todos.filter(function(todo){
        return !filters.hideCompleted || !todo.completed;
    })

    document.querySelector('#todo').innerHTML = '';

    const incompleteTodos = filteredTodo.filter(function (todos) {
        return !todos.completed
    })


    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todo').appendChild(summary)

    filteredTodo.forEach(function(todo){
        let p = document.createElement('p');
        p.textContent = todo.text;
        document.querySelector('#todo').appendChild(p);
    })
}