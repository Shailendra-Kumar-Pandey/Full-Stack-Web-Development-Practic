import React from 'react'

function Home() {
  return (
        <>
            <div>
               <button>Create New USER</button>

               <table >
                    <thead >
                        <tr>
                            <th>S.No</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>Shailendra Kumar Pandey</td>
                            <td>shailendra@gmail.com</td>
                            <td>123456789</td>
                            <td>
                                <button>Viwe</button>
                                <button>Edit</button>
                            </td>
                        </tr>
                    </tbody>
               </table>
            </div>
        </>
  )
}
 
export default Home
