let add = document.getElementById('add');
let todo = document.getElementById('todo');
let listTasks = document.querySelector(".tasks");



add.onclick = function () {
    // add a task
    if (todo.value.length == 0) alert("Please write a task !");
    else {
        //creat delete btn
        var delBtn = document.createElement('button');
        delBtn.setAttribute('class','delete');
        delBtn.innerHTML = "<img src='/static/images/trash.png' alt='delete'>";
        //creat the new task
        var newTask = document.createElement('div');
        newTask.innerHTML = todo.value;
        newTask.setAttribute('class', 'task');
        newTask.appendChild(delBtn)
        listTasks.appendChild(newTask);   
           
        //remove task
        let del = document.querySelectorAll(".delete");
        for(var i=0; i<=del.length; i++){
            del[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        
        //completed tasks
        let task = document.querySelectorAll(".task");
        for(var i=0; i<=task.length; i++){
            task[i].onclick = function (this    ) {
                this.classList.toogle("done");
            }
        }
    
    }
}