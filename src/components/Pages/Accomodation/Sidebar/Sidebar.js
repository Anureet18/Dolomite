import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import './Sidebar.css'
import { FaAngleDown } from "react-icons/fa";
import * as formik from 'formik';
import * as yup from 'yup';
import Button from 'react-bootstrap/Button';


function Sidebar() {
  const { Formik } = formik;
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email('Invalid email').required('Required'),
  });

  return (
    <>
      <div className='sidebar-outer'>
        
        <hr />
        <Row className='filter m-0'>
          <Col>
          <div className='label-icon'>
              <div><h6>Locations</h6></div>
              <div>< FaAngleDown /></div>
            </div>

            <Form>
              {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    label="Attachments"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    label="Arabba"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    label="Qatar"
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    label="Etihad"
                    name="group1"
                    type={type}
                    id={`inline-${type}-4`}
                  />

                </div>
              ))}
            </Form>
          </Col>
          <hr />
          <Col>
            <Form>
            <div className='label-icon'>
              <div><h6>Status</h6></div>
              <div>< FaAngleDown /></div>
            </div>

              {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    label="Class"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    label="Easy"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    label="Smart"
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                </div>
              ))}
            </Form></Col>

          <hr />
          <Col>
          <div className='label-icon'>
              <div><h6>Rooms</h6></div>
              <div>< FaAngleDown /></div>
            </div>
            <div className="rating">
            <Button variant="light">0+</Button>{' '}
            <Button variant="light">1+</Button>{' '}
            <Button variant="light">2+</Button>{' '}
            <Button variant="light">3+</Button>{' '}
            <Button variant="light">4+</Button>{' '}
            </div>
          </Col>
          <hr />
          <Col>
            <div className='label-icon'>
              <div><h6>Rating</h6></div>
              <div>< FaAngleDown /></div>
            </div>
            <div className="rating">
            <Button variant="light">0+</Button>{' '}
            <Button variant="light">1+</Button>{' '}
            <Button variant="light">2+</Button>{' '}
            <Button variant="light">3+</Button>{' '}
            <Button variant="light">4+</Button>{' '}
            </div>
          </Col>
        </Row>
      </div>

      <div className="special">
        <h2 className='any'>DO YOU HAVE ANY <br />
          SPECIAL REQUESTS?</h2>
        <p>We offer our guests the best accommodation in
          the Dolomites, selected and cared for for a
          dream holiday.</p>
        <div className="form-control">
          <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
              name: '',
              email: ''
            }}
          >
            {({ handleSubmit, handleChange, values, errors }) => (
              <Form className='no-border' noValidate onSubmit={handleSubmit}>

                <Form.Group
                  controlId="validationFormik103" className="position-relative" >
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    <p>Please enter your name</p>
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  controlId="validationFormik103" className="position-relative" >
                  <Form.Control
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    <p>{errors.email}</p>
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea"
                    rows={6}
                    placeholder='Your message' />
                </Form.Group>

                <Button className='send-btn' type="submit">Send</Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}

export default Sidebar
