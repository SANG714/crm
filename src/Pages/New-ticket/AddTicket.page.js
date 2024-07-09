import React, {useState}from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PageBreadcrumb from '../../components/Breadcrumb/Breadcrumb.comp'
import AddTicketForm from '../../components/Add-ticket-form/AddTicketForm.comp';
import DefaultLayout from '../../Layout/DefaultLayout';

const initialFrmDt={
  subject: "",
  issueDate: "",
  detail: "",
};

const AddTicket= () => {

const[frmData, setFrmData] = useState(initialFrmDt);


const handleOnChange=(e) =>{
// console.log("This is e", e)
  const {name, value} = e.target;
// console.log("This is e", e)
  setFrmData({
    ...frmData,
    [name]:value
  })
//  console.log(name, value);
};


const handleOnSubmit = e =>{
  e.preventDefault()
  console.log("Form submit request received")
}
console.log("This is frmDt", frmData)
  return (
    <div>
      <DefaultLayout>
      <Container>
        <Row>
            <Col>
            <PageBreadcrumb page= "New Ticket"/>
            </Col>
        </Row>
        <Row>
            <Col>
            <AddTicketForm handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmDt={frmData}/>
            </Col>
        </Row>
   </Container>
      </DefaultLayout>
      </div>
  )
}

export default AddTicket
