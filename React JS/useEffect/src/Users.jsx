function Users({ userData }) {
//   console.log(userData);

  return (
    <>
      <div className="container">
        <table>
          <thead className="tablehadder">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Web-Side</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.phone}</td>
                  <td>{e.website}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
