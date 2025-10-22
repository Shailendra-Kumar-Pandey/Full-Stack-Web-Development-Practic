
    // const todoNote = [];
    
    let todoList = document.getElementById("todo-list")
    let todoNote = `<div class="container">
                        <button onclick="closeNote()">X</button>
                        <div class="inner-container">
                            <textarea id="todo-text" onkeyup="addNote(this.value)" placeholder="Type a new task..."></textarea>
                        </div>
                    </div>`
    todoList.innerHTML += todoNote;

    function addNewItem(){
        todoList.innerHTML += todoNote;
    }

    function addNote(){

        console.log(document.getElementById("todo-text").value)

    }