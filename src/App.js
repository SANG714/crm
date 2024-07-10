import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Entry from './Pages/entry/Entry.page';
// import DefaultLayout from './Layout/DefaultLayout';
import Dashboard from './Pages/Dashboard/Dashboard.page';
import AddTicket from './Pages/New-ticket/AddTicket.page';
import TicketLists from "./Pages/Ticket-list/TicketLists.page";
import Ticket from "./Pages/Ticket/Ticket.page";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
        <Route exact path="/" element={<Entry />}>
        </Route>
          <Route path="/dashboard" element={<Dashboard/>}>
        </Route>
          <Route path="/add-ticket" element={<AddTicket/>}>
        </Route>
           <Route path="/tickets"
          element={<TicketLists/>}>
        </Route> 
          <Route path="/ticket/:tid" element={<Ticket/>}>
        </Route> 
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
