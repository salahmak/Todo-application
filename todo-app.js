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

let arr = [];
todos.forEach(function(todo) {
    if (todo.completed === false) {
        arr.push(todo.text)
    }

})

let filters = {
    text: ''
}

let h2 = document.createElement('h2');
h2.textContent = `You have ${arr.length} uncompleted todos`;
document.querySelector('body').appendChild(h2);

let renderTodos = function(todos, filters) {
    let filteredTodo = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.text.toLowerCase());
    })
    document.querySelector('#todo').innerHTML = '';

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
    var title = document.querySelector('input[type="text"]').value;
    addTask(title, false);
})
