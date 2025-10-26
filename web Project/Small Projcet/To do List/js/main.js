const notes = JSON.parse(localStorage.getItem("notes")) || [];

let todoList = document.getElementById("todo-list");
let row = `<div class="container">
                        <button onclick="closeNote(this.parentElement)">X</button>
                        <div class="inner-container">
                            <textarea id="todo-text" onkeyup="addNote(this.value)" placeholder="Type a new task..."></textarea>
                        </div>
                    </div>`
todoList.innerHTML += row;

function displayLoadData(){
    let totaleRows = "";
    notes.forEach((ele,index) => {
        let row = `<div class="container">
                        <button onclick="closeNote(${index})">X</button>
                        <div class="inner-container">
                            <textarea id="todo-text" onkeyup="addNote(${index},this.value)" placeholder="Type a new task...">${ele.text}</textarea>
                        </div>
                    </div>`
        totaleRows += row;
    })
    todoList.innerHTML = totaleRows;
}

function addNewItem() {
    notes.push("");
    savedata()
    displayLoadData();
}

function addNote(index, value) {
    notes[index] =  value;
    savedata();
}

function closeNote(index) {
    notes.splice(index, 1);
    savedata();
    displayLoadData();
}


function savedata() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

    displayLoadData();
    