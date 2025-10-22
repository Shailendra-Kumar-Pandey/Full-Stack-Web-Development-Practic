

    const notes = [];
    
    let todoList = document.getElementById("todo-list")
    let todoNote = `<div class="container">
                        <button onclick="closeNote(this.parentElement)">X</button>
                        <div class="inner-container">
                            <textarea id="todo-text" onkeyup="addNote(this.value)" placeholder="Type a new task..."></textarea>
                        </div>
                    </div>`
    todoList.innerHTML += todoNote;

    function addNewItem(){
        todoList.innerHTML += todoNote;
    }
    
    const todoStore = {
        text : null
    }
    function addNote(value){
        if(value === ""){
            return;
        }else{
            todoStore["text"] = value
        }     
        console.log(value)   

    }

    // function displaySavedNote(){
    //     notes.push(todoStore)
    //     console.log(notes)
    // }
    // displaySavedNote();

    function closeNote(target){
        todoList.removeChild(target);
        console.log(target)
    }
    // notes.push(todoStore)
    // console.log(notes)
