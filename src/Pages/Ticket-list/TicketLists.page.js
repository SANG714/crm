import React, { useEffect, useState } from 'react'
import { Container,Row,Col, Button} from 'react-bootstrap'
import PageBreadcrumb from '../../components/Breadcrumb/Breadcrumb.comp'
import SearchForm from '../../components/search-form/SearchForm.comp'
import DefaultLayout from '../../Layout/DefaultLayout'
import TicketTable from '../../components/Ticket-table/TicketTable.comp'
import tickets from '../../Assets/Data/Dummy-tickets.json'

const TicketLists= () => {
    const [str, setStr]=useState('')
    const [dispTicket, setDispTicket]=useState(tickets)

    useEffect(() => {}, [str, dispTicket]);

    const handleOnChange = e =>{
        const {value} = e.target;
        setStr(value);
        searchTicket(value);

        
    };

    const searchTicket= sttr =>{
        const displayTickets = tickets.filter(row => row.subject.toLowerCase().includes(sttr.toLowerCase())
    );
    console.log(displayTickets)
        setDispTicket(displayTickets)
    }
  return (
    <DefaultLayout>
    <Container>
        <Row className="mt-4">
            <Col>
            <PageBreadcrumb page="Ticket Lists"></PageBreadcrumb>
            </Col>
        </Row>

        <Row>
            <Col>
            <Button variant= "info">Add New Ticket</Button>
            </Col>
            <Col className='text-right'><SearchForm handleOnChange={handleOnChange}
            str={str}/>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col>
            <TicketTable tickets={dispTicket}/>
            </Col>
        </Row>
      
    </Container>
    </DefaultLayout>
  )
}

export default TicketLists
