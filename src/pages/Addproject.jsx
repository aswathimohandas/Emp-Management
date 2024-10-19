import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addEmployee } from '../services/allApis';


function Addproject() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [employee, setEmployee] = useState({
    fname: "", lastname: "", age: "", qualification: "", email: ""
  })

  const handleAddemployee = async () => {
    // console.log(employee);
    const { fname, lastname, age, qualification, email } = employee
    if (!fname || !lastname || !age || !qualification || !email) {
      toast.warn("invalid inputs!!!")
    }
    else {
      const res = await addEmployee(employee)
      console.log(res);

      if (res.status == 200) {
        toast.success('employee added')
        handleClose()
        setEmployee({
          fname: "", lastname: "", age: "", qualification: "", email: ""
        })
      }
      else {
        toast.warning('error')
      }



    }





  }


  return (
    <>
      <div>
        <button onClick={handleShow} className='btn btn-success mt-5 m-2'><i className="fa-solid fa-plus fa-xl p-2" />Add Employee</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingInput" label="Firstname" onChange={(e) => setEmployee({ ...employee, fname:e.target.value })} className="mb-3">
            <Form.Control type="text" placeholder="FIrstname" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Lastname" onChange={(e) => setEmployee({ ...employee, lastname: e.target.value })} className="mb-3">
            <Form.Control type="text" placeholder="Lastname" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Age" onChange={(e) => setEmployee({ ...employee, age: e.target.value })} className="mb-3">
            <Form.Control type="text" placeholder="age" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Qualification" onChange={(e) => setEmployee({ ...employee, qualification: e.target.value })} className="mb-3">
            <Form.Control type="text" placeholder="Qualification" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Email" onChange={(e) => setEmployee({ ...employee, email: e.target.value })} className="mb-3">
            <Form.Control type="email" placeholder="Email" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddemployee}>Add</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Addproject
