// Frontend Part of This JS file

const baseURL = "http://localhost:2000";
const URLgetAllStudents = "/getAllStudents";
const URLdeleteStudent = "/deleteStudent";
const URLaddNewStudent = "/addNewStudent";
const URLupdateStudentdata = "/updateStudentdata";
const URLsingleStudentData = "/singleStudentData";

let studentData = [];

// Open Close Modal
let modal = false;
function openClose(modalType) {
    if(modal === false){
        document.getElementById(modalType).style.display = "flex";
        modal = true;
    }else{
        document.getElementById(modalType).style.display = "none";
        modal = false;
    }
}


// Get All Student API function
function getAllStudents(){
    fetch(`${baseURL}${URLgetAllStudents}`, {method : 'GET'})
    .then((res) =>  res.json())
    .then((response)=>{
        
        studentData = response.result;
        displayAllData(studentData)
    })
    .catch((err)=>{
        console.log(err, `${URLgetAllStudents} Something went wrong...`);
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

let uniqeID;
function editStudentData(id) {
    console.log(id)
    uniqeID = Number(id);
    
    let updateData = studentData.find((e)=> Number(e.id) === uniqeID);

    document.getElementById('nameUpdate').value = updateData.name;
    document.getElementById('emailUpdate').value = updateData.email;
    document.getElementById('classUpdate').value = updateData.class;
    document.getElementById('mobileUpdate').value = updateData.mobile;
}
let student= {
    name : null,
    email : null,
    class : null,
    mobile : null
}
function updateStudent(prop, value){
    if(value.trim() === ""){
        student[prop] = null;        
    }else 
        if(prop === "mobile"){
        student[prop] = Number(value)
        }else{
            student[prop] = value;
        }
    
    if(student.name === null){
        student.name = document.getElementById('nameUpdate').value;
    }
    if(student.email === null){
        student.email = document.getElementById('emailUpdate').value;
    }
    if(student.class === null){
        student.class = document.getElementById('classUpdate').value;
    }
    if(student.mobile === null){
        student.mobile = document.getElementById('mobileUpdate').value;
    }
}
function updateStudentData(){
    if(!student.name || !student.email || !student.class || !student.mobile){
        alert("All Field is requred! Please fill all Field...")
        return; 
    }
    if(studentData.id === uniqeID){
        studentData.name = student.name;
        studentData.email = student.email;
        studentData.class = student.class;
        studentData.mobile = student.mobile
    }
    // edit Student Data Update
    fetch(`${baseURL}${URLupdateStudentdata}?id=${uniqeID}`, {
        method: "PUT",
        headers : {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(student)
    })
    .then(res => res.json())
    .then( response => console.log(response))
    .catch( err => console.log(err));
    
    openClose(editModal);

    displayAllData(studentData);

    alert("Student Data Successfully Updated...!")

    student = {
        name : null,
        email : null,
        class : null,
        mobile : null
    }
}


function deleteStudent(id) {
    console.log(id)
}