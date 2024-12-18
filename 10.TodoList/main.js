const prompt = require("prompt-sync")();

let todos = [
    ["Workout", false]
];


function displayTodos() {
    console.log();
    for (let todo of todos) {
        console.log(`${todo[0]} - ${todo[1] ? 'Completed' : 'Not completed'}`);
    }
}

function addTodo() {
    let title = prompt("Enter a title: ");
    todos.push([title, false]);
}

function toggleComplete(index) {
    todos[index][1] = !todos[index][1]
}

function deleteTodo(index) {
    let res = [];
    for (let i = 0; i < todos.length - 1; i++) {
        if (i !== index) {
            res.push(todos[index]);
        }
    }
    todos = res;
}

let running = true;
let index;

while (running) {
    console.log("1.Add Todo\n2.Delete Todo\n3.Display todos\n4.Toggle Complete\n5.Quit");
    let option = parseInt(prompt("Enter an option: "));

    switch (option) {
        case 1:
            addTodo();
            break;
        case 2:
            index = parseInt(prompt("Enter an index of a todo: "));
            if (0 < index < todos.length) {
                deleteTodo(index);
                console.log(`Deleted todo with index of ${index}\n`);
            }
            break;
        case 3:
            displayTodos();
            break;
        case 4:
            index = parseInt(prompt("Enter an index of a todo: "));
            if (0 < index < todos.length) {
                toggleComplete(index);
                console.log(`Updated todo with index of ${index}\n`);
            }
            break;
        case 5:
            running = false;
            break;
        default:
            console.log("Invalid option. Please try again!");
    }
    console.log("\n");
}

console.log("Todos closed!");
