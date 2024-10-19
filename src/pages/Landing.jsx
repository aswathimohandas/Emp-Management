import React from 'react'
import { Row,Col } from 'react-bootstrap'
// import Button from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Landing() {
  return (
   <>
   <div style={{height:'80vh',backgroundColor:'skyblue'}}>
    <Row>
        <Col md={6} sm={12}>
       
       <div className='m-5 container p-5'>
       <i className="fa-solid fa-users m-2 fa-xl" style={{color: "#FFD43B",}} />
           <span className='fs-3'> Employee Management</span>
            {/* <p md={6} sm={12} className='aligntext-center mt-3 ms-2 justify-content-center'>PeopleHR India allows you to focus on the critical elements
                                of HR and automates all the monotonous tasks you hate. It swaps inaccurate spreadsheets and
                                paper file liabilities for a cutting-edge online HR system, so you can benefit from HR management
                                software, designed to cost you less,
                                spot your opportunities, and boost the growth of your business.</p> */}
                               <Link md={6} sm={12} className='btn btn-danger d-grid' to={'/home'}>Lets Go</Link>
    
       </div>
        </Col>

        <Col md={6} sm={12}>

        <div className='m-5' md={6} sm={12}>
            {/* <img src="https://png.pngtree.com/png-vector/20220409/ourmid/pngtree-man-search-for-hiring-job-online-from-laptop-human-resources-management-png-image_4503521.png" className='img-fluid' alt="" /> */}
        </div>

        </Col>
    </Row>
   </div>
   
   </>
  )
}

export default Landing
