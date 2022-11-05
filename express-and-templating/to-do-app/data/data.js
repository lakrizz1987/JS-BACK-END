const todos = ['Learn JS'];

const addTodo = (name) => {
    todos.push(name)
};

const getAll = () => {
    return todos.slice();
}

module.exports = {
    addTodo,
    getAll
}
