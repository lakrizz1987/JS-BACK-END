const fs = require('fs');
const todosData = require('./collection.json');
const todos = todosData.slice();
console.log(todosData)

const addTodo = (name) => {
    todos.push(name)
    fs.writeFile('./data/collection.json', JSON.stringify(todos), (err) => {
        if (err) {
            console.log('ERROR NOW:' + err)
        }
        console.log('Add new data!')
    })
};

const getAll = () => {
    return todos.slice();
}

module.exports = {
    addTodo,
    getAll
}
