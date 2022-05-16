import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import "./ContactPage.css";
import UbiComponent from "./UbiComponent";
import { useState } from "react";
import axios from "axios"

function ContactPage() {
  const initialForm = {
    mail: '',
    name: '',
    phone: 1234567891,
    message: ''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
    console.log(oldData)
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    setMsg("");
    setSending(true);
    const response = await axios.post(
      "http://localhost:3000/api/contact",
      formData
    );
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm);
    }
  };

  return (
    <>
      <h3>CONTACT</h3>
      <div className="fullContainer">
        <div className="formContainer">
          <Form action="/contacto" method="post" onSubmit={handleSumbit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="mail"
                type="email"
                placeholder="name@example.com"
                value={formData.mail}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                name="phone"
                type="number"
                placeholder="123456789"
                value={formData.phone}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Name / Last name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Name / Last name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Write here</Form.Label>
              <Form.Control
                name="message"
                as="textarea"
                rows={5}
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              style={{ border: "grey 1px solid" }}
              type="sumbit"
              value="enviar"
            >
              ENVIAR
            </Button>
          </Form>
          {sending ? <p>Enviando...</p> : null}
          {msg ? <p>{msg}</p> : null}
        </div>
        <div className="ubiContainer">
          <UbiComponent />
        </div>
      </div>
    </>
  );
}

export default ContactPage;
