// Frontend Part of This JS file

const baseURL = "http://localhost:2000";
const URLgetAllStudents = "/getAllStudents";
const URLdeleteStudent = "/deleteStudent";
const URLaddNewStudent = "/addNewStudent";
const URLupdateStudentdata = "/updateStudentdata";
const URLsingleStudentData = "/singleStudentData";

const studentData = []

function displayAllData(){

    let totleRow = '';

    studentData.forEach((ele, i)=>{

        let row = `<tr>
                            <td>${i+1}</td>
                            <td>${ele.name}</td>
                            <td>${ele.email}</td>
                            <td>${ele.class}</td>
                            <td>${ele.mobile_no}</td>
                            <td>
                                <button class="action-btn edit-btn" onclick="openClose('editModal')">Edit</button>
                                <button class="action-btn delete-btn" onclick="openClose('deleteModal')">Delete</button>
                            </td>
                    </tr>`;
        totleRow += row;
    })
    document.getElementById('tBody').innerHTML = totleRow;
}

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
    .then((res)=>{
        return res.json;
    })
    .then((response)=>{
        studentData = response;
    })
    .catch((err)=>{
        console.log(err, `${URLgetAllStudents}`);
    })
    // Display All Stundet Data Show in Screen
    displayAllData();
}

