// Frontend Part of This JS file

const baseURL = "http://localhost:2000";
const URLgetAllStudents = "/getAllStudents";
const URLdeleteStudent = "/deleteStudent";
const URLaddNewStudent = "/addNewStudent";
const URLupdateStudentdata = "/updateStudentdata";
const URLsingleStudentData = "/singleStudentData";

let studentData = [];

// Call Get All Student API function





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
                                <button class="action-btn edit-btn" onclick="editStudent(${ele.id}), openClose('editModal')">Edit</button>
                                <button class="action-btn delete-btn" onclick="deleteStudent(${ele.id}), openClose('deleteModal')">Delete</button>
                            </td>
                    </tr>`;
        totleRow += row;
    })
    document.getElementById('tBody').innerHTML = totleRow;
}

function editStudent(id) {
    
    console.log(id)
}

function deleteStudent(id) {
    console.log(id)
}