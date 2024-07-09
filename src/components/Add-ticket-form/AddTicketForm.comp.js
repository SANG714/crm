import React from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap';
import '../Login/Login.style.css';
import PropTypes from 'prop-types'
import "./Add-ticket-form.style.css"

const AddTicketForm = ({handleOnSubmit, handleOnChange, frmDt} ) => {
  return (
    <div className="mt-4 p-5 bg-light p-* rounded add-new-ticket">
      <h1 className='text-info text-center'>Add  new Ticket</h1>
      <hr/>
      <Form autoComplete= "off" onSubmit= {(e)=> handleOnSubmit(e)}>
               <Form.Group as={Row}>
                <Form.Label column sm={3}>Subject</Form.Label>
                <Col sm={9}>
                <Form.Control 
                    name="subject"
                     value={frmDt.subject}
                     minLength="3"
                     maxLength="100"
                    onChange={(e)=>handleOnChange(e)}
                    placeholder="Subject"
                    required
                    />
                    </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="login-button">
                <Form.Label column sm={3}>Issue Found</Form.Label>
                <Col sm={9}>
                     <Form.Control  type="date"
                    name="issueDate"
                    value= {frmDt.issueDate}
                     onChange={(e)=> handleOnChange(e)}
                    placeholder="Issues"
                    required
                    />
                    </Col>
                    </Form.Group>
                    <Form.Group>
                <Form.Label className="login-button">Description </Form.Label>
                     <Form.Control as= "textarea"
                    name="detail"
                    rows="5"
                    value={frmDt.detail}
                     onChange={(e)=> handleOnChange(e)}
                    placeholder="Descibe the issue"
                    required
                    />
                    </Form.Group> 

                    <Button className="login-button" type="submit" variant="info" 
                    >Login</Button>
            </Form>
    </div>
  )
}

AddTicketForm.propTypes= {
  handleOnSubmit: PropTypes.func.isRequired, 
  handleOnChange: PropTypes.func.isRequired, 
  frmDt:PropTypes.object.isRequired

}

export default AddTicketForm
