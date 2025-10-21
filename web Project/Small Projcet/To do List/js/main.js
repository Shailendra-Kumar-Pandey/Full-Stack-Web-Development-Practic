// loging To-do List

const todoList = document.getElementById("todo-list");



    
    todoList.innerHTML = `  <div class="container">
                                <button onclick="closeNote()">X</button>
                                <div class="inner-container">
                                    <textarea id="todo-text" onkeyup="addNote(this.value)" placeholder="Type a new task..."></textarea>
                                </div>
                            </div>`



const nodeItem = [];




function addNewItem() {
    
}


function closeNote(){
    
    // window.close();
}