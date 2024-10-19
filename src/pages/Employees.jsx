import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { getEmployee,deleteEmployees} from '../services/allApis';
import Edit from '../components/Edit';
import { toast } from 'react-toastify';

function Employees() {

  const [employeeList, setemployeeList] = useState([])

 useEffect(()=>{
  getEmployees()
 })


  const getEmployees=async()=>{
    const res= await getEmployee()
    // console.log(res);
    if(res.status==200){
      setemployeeList(res.data)
    }
    
  }

  const handleDelete=async(id)=>{
    const res= await deleteEmployees(id)
    if(res.status==200){
      toast.success('Deleted successfully')
    getEmployees()
  }
  else{
    toast.success("something went wrong!!")
  }
    
    

  }
  return (
    <>

<h1 className='text-center text-info'>Employees</h1>
      <div className='m-5 border border-1 shadow'>
        {
          employeeList.length > 0 ?
          <div className='row'>
            {
            employeeList.map(item=>(
              <Card style={{ width: '18rem',backgroundColor:"aliceblue" }} className='border border-5 border-white' >
               <div><img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" className='img-fluid' alt="" /></div>
                <Card.Body>
                 <div >
                    <Card.Title className='text-info'>{item?.fname}</Card.Title>
                    <Card.Title className='text-info'>{item?.lastname}</Card.Title>
                    <Card.Text className='text-success'>
                     {item?.qualification}
                    </Card.Text>
                    <Card.Text>
                     {item?.email}
                    </Card.Text>
                    <Card.Text>
                     {item?.age}
                    </Card.Text>
                 </div>
                 <div className='d-flex justify-content-around'>
                    <Edit employeeToEdit={item}/>
                    <button className='btn' onClick={()=>{handleDelete(item._id)}}><i className="fa-solid fa-trash" style={{color: "#e00b20",}} /></button>
                    
                 </div>
                </Card.Body>
              </Card>

            )

            )
            
            }

          </div>
          :
          <h1>No employees available</h1>
          }
          </div>
    </>
  )
}

export default Employees
