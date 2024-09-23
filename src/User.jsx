import React from 'react'
import useFetch from './useFetch'


const User = () => {
    const users=useFetch("https://jsonplaceholder.typicode.com/users")
    console.log(users);
    
  return (
    <div className='my-5 container'>
      <h1 className='text-center text-success'>All users List</h1>
      <table className=' table mt-5 shadow'>
<thead>
    <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Website</th>
        <th>Company</th>

    </tr>
</thead>
<tbody>
{
    users?.map((user,index)=>
    (
        <tr key={user?.id}>
        <td>{index+1}</td>
        <td>{user?.name}</td>
        <td>{user?.email}</td>
        <td>{user?.address.street},{user?.address.suite},{user?.address.city},{user?.address.zipcode}</td>
        <td>{user?.phone} </td>
        <td>{user?.website}</td>
        <td>{user?.company.name}</td>
</tr>
    ))
}
</tbody>

      </table>
    </div>
  )
}

export default User
