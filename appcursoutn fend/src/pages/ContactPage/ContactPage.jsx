import React from 'react'
import Form from 'react-bootstrap/Form'
import './ContactPage.css'
import UbiComponent from './UbiComponent'

function ContactPage() {
  return (
    <>
    <h3>CONTACT</h3>
    <div className='fullContainer'>
    
    <div className='formContainer'>
      
      <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
    <Form.Label>Phone number</Form.Label>
    <Form.Control type="number" placeholder="123456789" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
    <Form.Label>Name / Last name</Form.Label>
    <Form.Control type="text" placeholder="Name / Last name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Write here</Form.Label>
    <Form.Control as="textarea" rows={5} />
  </Form.Group>
</Form>
    </div>
    <div className='ubiContainer'>
      <UbiComponent/>
    </div>
    </div>
    </>
  )
}

export default ContactPage