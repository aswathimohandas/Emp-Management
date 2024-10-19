import React from 'react'
import { Button} from 'react-bootstrap'
import {Row,Col} from 'react-bootstrap'
import Addproject from './Addproject'
import Employees from './Employees'

function Home() {
  return (
    <>
    <div>
        <Row>
            <Col md={2} sm={12}>
            <Addproject/>
            </Col>
            <Col md={10} sm={12}>
            <Employees/>
            </Col>
            
        </Row>
    </div>
    
    </>
  )
}

export default Home
