let todos = getSavedTodos();



let filters = {
    text: '',
    hideCompleted: false
}

renderTodos(todos, filters);

document.querySelector('#filter').addEventListener('input', function(e){
    filters.text = e.target.value.toLowerCase();
    renderTodos(todos, filters);
})

document.querySelector('#form').addEventListener('submit', function(e){
    e.preventDefault();
    todos.push({
        text: e.target.elements.firstName.value,
        completed: false
    })
    saveTodos(todos);
    renderTodos(todos, filters);
    e.target.elements.firstName.value = '';
})

document.querySelector('#hide-completed').addEventListener('change', function(e){
   filters.hideCompleted = e.target.checked;
   renderTodos(todos, filters);
})