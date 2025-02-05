import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import TicketTable from '../../components/Ticket-table/TicketTable.comp';
import tickets from "../../Assets/Data/Dummy-tickets.json"
import PageBreadcrumb from '../../components/Breadcrumb/Breadcrumb.comp';
import DefaultLayout from '../../Layout/DefaultLayout';

const Dashboard = () => {
  return (
    <div>
        <DefaultLayout>
        <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="Dashboard"/>
            </Col>
        </Row>
        <Row>
            <Col className='text-center mt-5 mb-2'>
            <Button variant='info' style={{fontSize:"2rem", padding: "10px 30px"}}>Add New Ticket</Button>
            </Col>
        </Row>
        <Row>
            <Col className='text-center  mb-2'>
            <div>Total tickets: 50</div>
            <div>Pending tickets: 5</div>
            </Col>
        </Row>
        <Row>
            <Col className='mb-2'>
            Recently added tickets
            </Col>
        </Row>
        <hr />

        <Row>
            <Col className='recent-ticket'>
            <TicketTable tickets={tickets}/>
            </Col>
        </Row>
        </Container>
        </DefaultLayout>
    </div>
  )
}

export default Dashboard
