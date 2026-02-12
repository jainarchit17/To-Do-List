var task=document.querySelector("#taskArea");
// console.log(task);
const btn=document.querySelector('#addBtn');
// console.log(btn);
btn.addEventListener('click',addTask)
var todolist=document.querySelector("#todo")
function addTask() {
    // console.log("Button action");
    // console.log(taskArea.value);
    let todoDiv=document.createElement("div");
    todoDiv.classList.add("allItems")
    let item=document.createElement('p');
    item.innerHTML=taskArea.value;
    todoDiv.appendChild(item);
    if (taskArea.value=='') return;//to avoid empty additions/tasks
    const trashBtn=document.createElement("button");
    trashBtn.classList.add("trash");
    trashBtn.innerHTML='<i class="fa-solid fa-trash"></i>'
    todoDiv.appendChild(trashBtn);
    todolist.appendChild(todoDiv);
    taskArea.value='';//make textarea empty after adding 
    console.log(todoDiv);
    
    todolist.addEventListener('click',deleteItem)
    function deleteItem(e){
        const item=e.target;
        const trashButton=item.closest(".trash")//checks that if user click on exact icon, then is their any ancestor of that icon of class=trash

        if (trashButton){
            //to find parent of any item
            const parent=trashButton.parentElement;
            parent.remove();
        }
    }
    
}