import React, { useEffect, useState } from 'react'
import { Container, Row, Col,Button } from 'react-bootstrap'
import PageBreadcrumb from '../../components/Breadcrumb/Breadcrumb.comp'
import './Ticket.style.css'
import tickets from '../../Assets/Data/Dummy-tickets.json'
import MessageHistory from '../../components/Message-history/MessageHistory.comp'
import UpdateTicket from '../../components/Update-ticket/UpdateTicket.comp'


const ticket= tickets[0];
const Ticket = () => {
    const[message, setMessage]= useState('');
    useEffect(()=> {}, [message]);

    const handleOnChange = e =>{
        setMessage(e.target.value);
    }

    const handleOnSubmit=()=>{
        alert("Form submitted!");
    };
  return (
    <Container>
      <Row>
        <Col>
        <PageBreadcrumb page="Ticket"/>
        </Col>
      </Row>
      <Row>
        <Col className='font-weight-bolder text-secondary'>
        <div className="subject">Subject  : {ticket.subject}</div>
        <div className="date">Ticket Opened: {ticket.addedAt}</div>
        <div className="status">Status: {ticket.status}</div>
        </Col>
        <Col className='text-right'>
        <Button variant="outline-info" >Close Ticket</Button>
        </Col>
      </Row>
      <Row className='mt-4' >
        <Col>
        <MessageHistory msg={ticket.history} />
        </Col>
      </Row>
      <Row className='mt-4' >
        <Col>
        <UpdateTicket msg={message}
        handleOnChange={handleOnChange} 
        handleOnSubmit={handleOnSubmit} />
        </Col>
      </Row>

    </Container>
  )
}

export default Ticket
