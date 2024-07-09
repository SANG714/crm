import React from 'react'
import PropTypes from 'prop-types';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import './Login.style.css';


const LoginForm = ({handleOnChange, handleOnSubmit, formSwitcher, email, pass}) => {

  return (
    <Container>
        <Row>
            <Col>
            <h1>
                Client Login
            </h1>
            <hr/>
            <Form autoComplete= "off" onSubmit= {handleOnSubmit}>
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
                    <Form.Group>
                <Form.Label className="login-button">Password</Form.Label>
                     <Form.Control type="password"
                    name="password"
                    value={pass}
                    onChange={(handleOnChange)}
                    placeholder="Password"
                    required
                    />
                    </Form.Group> 

                    <Button className="login-button" type="submit">Login</Button>
            </Form>
            <hr/>
            </Col>
        </Row>

        <Row>
            <Col>
            <a href="#!" onClick= {()=>formSwitcher("reset")}>
            Forgot Password?
            </a>
            </Col>
        </Row>
    </Container>
  )
}

LoginForm.propTypes={
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired

}
export default LoginForm
