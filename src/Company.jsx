import React from 'react'
import myStyle from './style.module.css'

const Company = () => {
    const employeeDetails=[
        {id:"100",ename:"Max Miller",Salary:45000},
        {id:"101",ename:"Hansimmer",Salary:30000},
        {id:"102",ename:"Monrey Molly",Salary:25000},
        {id:"103",ename:"Charles",Salary:50000}
    ]
  return (
    <div className={myStyle.divStyle}>
        <h1 className="text-center m-5">All Employees</h1>
        <div className="container">
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>SALARY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      employeeDetails.map((emp,index)=>
                      ( //{} is used in js         //each row unique identify use key
                        <tr key={emp.id}> 
                            <td>{index+1}</td>
                            <td>{emp.id}</td>
                            <td>{emp.ename}</td>
                            <td>{emp.Salary}</td>

                        </tr>

                      )
                    )  

                    }
                </tbody>

            </table>
        </div>
    </div>
  )
}

export default Company