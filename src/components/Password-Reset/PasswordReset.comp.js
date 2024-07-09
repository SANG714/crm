import React from 'react'
import PropTypes from 'prop-types';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import './Login.style.css';


const ResetPassword = ({handleOnChange, handleOnResetSubmit, formSwitcher,  email}) => {

  return (
    <Container>
        <Row>
            <Col>
            <h1>
                Reset Password
            </h1>
            <hr/>
            <Form autoComplete= "off" onSubmit= {handleOnResetSubmit}>
               <Form.Group>
                <Form.Label>Email Address</Form.Label>
                     <Form.Control type="email"
                    name="email"
                    value={email}
                    onChange={(handleOnChange)}
                    placeholder="Enter email"
                    required
                    />
                    </Form.Group>
                    

                    <Button className="login-button" type="submit">Reset Password</Button>
            </Form>
            <hr/>
            </Col>
        </Row>

        <Row>
            <Col>
            <a href="#!" onClick={()=> formSwitcher("login") } >Login</a>
            </Col>
        </Row>
    </Container>
  )
}

ResetPassword.propTypes={
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    

}
export default ResetPassword
