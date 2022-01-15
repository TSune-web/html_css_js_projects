const form = document.querySelector('#todoForm');
const firstInput = document.querySelector('input:nth-of-type(1)');
const secondInput = document.querySelector('input:nth-of-type(2)');
const todoList = document.getElementById('todos');


// This is only applied to pre-existing elements
/*
const lis = document.querySelectorAll('li');
for(let li of lis) {
    li.addEventListener('click', () => {
        li.remove();
    });
}
*/
// To apply also new elements
// select the parent element of the target element(s)
todoList.addEventListener('click', (e) => {
    /*
    console.log('Click on ul');
    // below shows info about the element when clicked
    // check target info
    console.log(e);
    */

    // console.dir(e.target);

    // if target node is 'li', then remove that element
    e.target.nodeName === 'LI' && e.target.remove();
});



const addItems = (username, todos) => {
    const listEl = document.createElement('li');
    const bTag = document.createElement('b');

    // listEl.innerText = todoItem;
    bTag.append(username);
    listEl.append(bTag);
    listEl.append(` -> "${todos}"`);
    todoList.append(listEl);
    
    firstInput.value = "";
    secondInput.value = "";
} 


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const userName = firstInput.value;
    const todoItem = secondInput.value;

    addItems(userName, todoItem);
});
