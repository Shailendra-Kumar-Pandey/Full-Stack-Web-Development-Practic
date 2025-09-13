/*
    <tr>
        <td>1</td>
        <td>Apple</td>
        <td>iPhone 13 Pro</td>
        <td>₹ 999</td>
        <td>
            <button class="action-btn edit-btn">Edit</button>
            <button class="action-btn delete-btn">Delete</button>
        </td>
    </tr>
*/


let tBody = document.getElementById("tBody");

tBody.innerHTML =`<tr>
                        <td>1</td>
                        <td>Red Cheaf</td>
                        <td>Cashual Shoes</td>
                        <td>₹ 4500</td>
                        <td>
                            <button class="action-btn edit-btn" onclick="editProduct()">Edit</button>
                            <button class="action-btn delete-btn" onclick="deleteProduct()">Delete</button>
                         </td>
                    </tr>`
                    




function editProduct(){
    alert("Edit Product Function Called")
}

function deleteProduct(){
    alert("Delete Product Function Called")
}