const todos = [{
    text: 'wake up',
    completed: true
}, {
    text: 'get some food',
    completed: true
}, {
    text: 'play csgo',
    completed: false
}, {
    text: 'play minecraft',
    completed: true
}, {
    text: 'learn javascript',
    completed: false
}];



let filters = {
    text: ''
}



let renderTodos = function(todos, filters) {
    let filteredTodo = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.text.toLowerCase());
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
    renderTodos(todos, filters);
    e.target.elements.firstName.value = '';
})

document.querySelector('#checkbox').addEventListener('change', function(e){
    e.target.checked;   //the boolean the checks id the checkbox is true or false
})