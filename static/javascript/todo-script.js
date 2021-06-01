let add = document.getElementById('add');
let todo = document.getElementById('todo');

let listTasks = document.querySelector(".tasks");

// add a task
add.addEventListener('click', (e)=>{
    //creat del btn
    delBtn = document.createElement('div');
    delBtn.setAttribute('id', 'delete');
    delBtn.textContent = "x";
    //creat line of task
    todoList = document.createElement('div');
    todoList.textContent = todo.value
    todoList.setAttribute('class','task');

    todoList.appendChild(delBtn);
    listTasks.appendChild(todoList);

    todo.value = "";
});

let task = document.querySelector('.task');
let del = document.getElementById('delete');

del.addEventListener('click', ()=>{
    task.remove();
});

task.onclick = ()=>{
    a = 2
    if (a%2==0) task.style.textDecoration = "line-through";
    else task.style.textDecoration = "solid";
    ++a
};