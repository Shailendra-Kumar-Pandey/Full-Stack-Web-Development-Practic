// Frontend Part of This JS file

const baseURL = "http://localhost:2000";
const URLgetAllStudents = "/getAllStudents";

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
