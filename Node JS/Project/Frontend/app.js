// frontend logic

//get api

let studentData = [];

getAllStudents();

// displayAllData(studentData);

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

function openClose(modalID){
    if(isOpen === false){
        document.getElementById(modalID).style.display = 'flex';
        isOpen = true;
    }else{
        document.getElementById(modalID).style.display = 'none'
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
        // console.log(response.result)
        let id = response.result;
        student['id'] = Number(id);
        studentData.push(student);
    })
    .catch((err)=>{
        console.log(err)
    })

    displayAllData(studentData);
    openClose('addModal')
    student = {
            name : null,
            email : null,
            class : null,
            mobile : null
        }
}

// edit Student Data Logic:-
let uniqeId;
let privesData;
let studentIndex;
function editStudentData(id){
    console.log(id)
    uniqeId = id;
    privesData = studentData.find((e)=> e.id === id);

    studentIndex = studentData.findIndex((e)=> e.id === id)

    console.log(privesData)
    document.getElementById('name').value = `${privesData.name}`;
    document.getElementById('email').value = privesData.email;
    document.getElementById('class').value = privesData.class;
    document.getElementById('mobile').value = privesData.mobile;
}

function updateStudent(key, value){
     if(value.trim() === ""){
        student[key] = null;
    }else{
        student[key] = value;
    }

    if(student.name === null){
        student.name = privesData.name
    }
    if(student.email === null){
        student.email = privesData.email
    }
    if(student.class === null){
        student.class = privesData.class
    }
    if(student.mobile === null){
        student.mobile = privesData.mobile
    }
}

function updateStudentData(){
     // Validation
    if(!student.name || !student.email || !student.class || !student.mobile){
        alert("all field Require Plz fill on the Field...");
        return;
    }

    fetch(`http://localhost:2000/updateStudentdata?id=${uniqeId}`, {
        method : 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(student)
    })
    .then(res=>res.json())
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })

    student['id'] = uniqeId;
    studentData[studentIndex] = student;

    displayAllData(studentData);
    openClose('editModal')
    alert(`Successfully ${student.name} student data updated...!`);

    student = {
            name : null,
            email : null,
            class : null,
            mobile : null
        }
}


// Delete Student Data Logic:-

function deleteStudent(id){
    uniqeId = id;
    studentIndex = studentData.findIndex((e)=> e.id === id)
}

function confirmStudent(){

    studentData.splice(studentIndex, 1);

    fetch(`http://localhost:2000/deleteStudent?id=${uniqeId}`,{
        method : 'DELETE'
    })
    .then(res=>res.json())
    .then((response)=>{
        console.log(response);
    })
    .catch((err)=>{
        console.log(err)
    })

    displayAllData(studentData);

    openClose('deleteModal')

    alert(`Delete Student Successfully...`);
}
