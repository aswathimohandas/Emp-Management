import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='bg-light py-2 container-fluid'>
                <Row>
                    <Col sm={12} md={5}>
                        <h3>Employee Management 2024</h3>
                        <p className='aligntext-center' md={6} sm={12}>PeopleHR India allows you to focus on the critical elements
                            of HR and automates all the monotonous tasks you hate. It swaps inaccurate spreadsheets and
                            paper file liabilities for a cutting-edge online HR system, so you can benefit from HR management
                            software, designed to cost you less,
                            spot your opportunities, and boost the growth of your business.</p>

                    </Col>
                    <Col sm={12} md={2}>
                        <h3>Link</h3>
                        <div className='d-flex flex-column'>
                            <Link to={'/'}>Landing</Link>
                            <Link to={'/Home'}>Home</Link>
                            
                        </div>
                    </Col>
                    <Col sm={12} md={5}>
                        <h3>Feedback</h3>
                        <input type="textarea" className='form-control' />
                        <button className='btn btn-info mt-2'>Send</button>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Footer
