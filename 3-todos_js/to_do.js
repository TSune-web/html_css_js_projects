/*
1. ask entries from prompt
2. 4 functions:
        1) "new" - to add a Todo
        2) "list" - List All Todos
        3) "delete" - Remove Specific Todo
        4) "quit" - Quit the app
*/


// an empty array to get user input
const todos = [];
while (true) {
    let prom = parseInt(prompt("What would you like to do?"));
    // ============ 1. addition/ insertion
    if (prom === 1) {
        const inputItem = prompt("What todo item to add?");
        todos.push(inputItem);
    // ============ 2. listing all the items
    } else if (prom === 2) {
        console.log("************************");
        let i = 0;
        for (let item of todos) {
            console.log(i, item);
            i++;
        }
        console.log("************************");
    // ============ 3. delete an item of a given number
    } else if (prom === 3) {
        const index = parseInt(prompt("Enter index to delete"));
        if (index >= 0) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted}`);
        }
    // ============ 4. quit the app
    } else if (prom === 4) {
        break;
    }
}
