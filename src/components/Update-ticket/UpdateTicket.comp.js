import React from 'react'
import {Form, Button} from 'react-bootstrap'
import PropTypes from 'prop-types';

const UpdateTicket= ({msg, handleOnChange, handleOnSubmit}) => {
  return (
    <Form onSubmit={(e)=>handleOnSubmit(e)}>
        <Form.Label>Reply</Form.Label><br/>
        <Form.Text>Please reply your message here or update the ticket</Form.Text>
            <Form.Control 
            name=""
            value={msg}
            onChange={(e) =>handleOnChange(e)}
            as="textarea"
            row="5"
            />
            <div className="text-right mt-3 mb-3">
            <Button variant="info" type="submit" >Reply
            </Button>
            </div>
        
      
    </Form>
  )
}

UpdateTicket.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    msg: PropTypes.string.isRequired
}
export default UpdateTicket
