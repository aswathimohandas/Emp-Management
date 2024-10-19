import React,{useState} from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateEmployee } from '../services/allApis';
import { toast } from 'react-toastify';


function Edit({employeeToEdit}) {
    const [show, setShow] = useState(false);
    const [update,SetEmployeeUpdate]=useState({
        id:"",fname:"",lastname:"",age:"",qualification:"",email:""
    })

    const handleClose = () =>setShow(false);
    const handleShow = () =>
        {
            setShow(true);
            SetEmployeeUpdate({
                id:employeeToEdit._id,fname:employeeToEdit.fname,lastname:employeeToEdit.lastname,
                age:employeeToEdit.age,qualification:employeeToEdit.qualification,email:employeeToEdit.email
    
            })

        } 
        const handleChange = (e) => {
            SetEmployeeUpdate({
                ...update,
                [e.target.name]: e.target.value,
            })
        }
        const handleUpdate=async()=>{

            try {
                const res = await updateEmployee(update, update.id);
                if (res.status == 200) {
                  toast.success('Employee updated successfully');
                  handleClose();  // Close modal after successful update
                } else {
                  toast.error('Failed to update employee');
                }
                console.log(res);
              } catch (error) {
                console.error(error);
                toast.error('An error occurred');
              }
        }
            
            


  return (
    <>
    <button className='btn' onClick={handleShow}><i className="fa-solid fa-pen-to-square" style={{color: "#d30d35",}} /></button>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingInput" label="Firstname" className="mb-3">
            <Form.Control type="text" name='fname' value={update.fname} onChange={handleChange} placeholder="FIrstname" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Lastname" className="mb-3">
            <Form.Control type="text" name='lastname' value={update.lastname} onChange={handleChange} placeholder="Lastname" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Age" className="mb-3">
            <Form.Control type="text" name='age' value={update.age} onChange={handleChange} placeholder="age" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Qualification" className="mb-3">
            <Form.Control type="text" name='qualification' value={update.qualification} onChange={handleChange} placeholder="Qualification" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
            <Form.Control type="email" name='email' value={update.email} onChange={handleChange} placeholder="Email" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit
