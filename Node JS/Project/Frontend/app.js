// frontend logic

//get api

let studentData = [];

function getAllStudents(){
    fetch("http://localhost:2000/getAllStudents", {method : 'GET'})
    .then((res) =>  res.json())
    .then((response)=>{
        
        studentData = response.result;
        displayAllData(studentData)
    })
    .catch((err)=>{
        console.log(err, " Something went wrong...");
    })
}


function displayAllData(arr){
    
    let totleRow = '';

    arr.forEach((ele, i)=>{
        // console.log(ele)
        let row = `<tr>
                            <td>${i+1}</td>
                            <td>${ele.name}</td>
                            <td>${ele.email}</td>
                            <td>${ele.class}</td>
                            <td>${ele.mobile}</td>
                            <td>
                                <button class="action-btn edit-btn" onclick="editStudentData(${ele.id}), openClose('editModal')">Edit</button>
                                <button class="action-btn delete-btn" onclick="deleteStudent(${ele.id}), openClose('deleteModal')">Delete</button>
                            </td>
                    </tr>`;
        totleRow += row;
    })
    document.getElementById('tBody').innerHTML = totleRow;
}

let isOpen = false;

function openClose(modal){
    if(isOpen === false){
        document.getElementById(modal).style.display = 'flex';
        isOpen = true;
    }else{
        document.getElementById(modal).style.display = 'none'
        isOpen = false;
    }
}




//add New Student Data API:-

let student = {
    name : null,
    email: null,
    class : null,
    mobile : null
}

function addNewStudentData(key, value){
    if(value.trim() === ""){
        student[key] = null;
    }else{
        student[key] = value;
    }
}

function addNewStudent(){
    // Validation
    if(!student.name || !student.email || !student.class || !student.mobile){
        alert("all field Require Plz fill on the Field...");
        return;
    }

    // addNewStudent API:-
    fetch('http://localhost:2000/addNewStudent', {
        method : 'POST',
        headers : {
            'Content-Type':'application/json'
        },
        body : JSON.stringify(student)
    })
    .then( res => res.json())
    .then((response)=>{
        console.log(response.result)
        let id = response.result;
        student['id'] = Number(id);
        studentData.push(student);
        displayAllData(studentData);
        student = {
            name : null,
            email : null,
            class : null,
            mobile : null
        }
        openClose('addModal')
    })
    .catch((err)=>{
        console.log(err)
    })
    
}






