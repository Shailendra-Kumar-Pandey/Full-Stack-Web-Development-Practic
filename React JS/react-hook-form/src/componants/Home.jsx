import React from 'react';

function Home({onNavigate}) {

    

  return (
    <>
        <div className='flex flex-wrap flex-col justify-center items-center'>
            <button onClick={onNavigate} >Add new Data</button>
            <div>
                <table>
                    <thead>
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
                                <button>Edit</button>
                                <button>View</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div> 
    </>
  )
}

export default Home
