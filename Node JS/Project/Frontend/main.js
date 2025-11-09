// Frontend Part of This JS file

const baseURL = "http://localhost:2000";
const URLgetAllStudents = "/getAllStudents";

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
                /*
                    <tr>
                            <td>1</td>
                            <td>Shailendera Kumar Pandey</td>
                            <td>shailendera@gmail.com</td>
                            <td>MBA</td>
                            <td>9806638963</td>
                            <td>
                                <button class="action-btn edit-btn" onclick="openClose('editModal')">Edit</button>
                                <button class="action-btn delete-btn" onclick="openClose('deleteModal')">Delete</button>
                            </td>
                    </tr>
                */

    const studentData = []

function displayAllData(){

    let row = '';


}




// Get All Student API function
function getAllStudents(){
    fetch(`${baseURL}${URLgetAllStudents}`, {method : 'GET'})
    .then((res)=>{
        return res.json;
    })
    .then((response)=>{
        console.log(response);
    })
    .catch((err)=>{
        console.log(err, `${URLgetAllStudents}`);
    })
}
