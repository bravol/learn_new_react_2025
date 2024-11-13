import { useReducer } from "react";
import "./App.css";
import TicketForm from "./components/TicketForm";
import ticketReducer from "./reducers/ticketReducers";
import "./styles.css";
import TicketList from "./components/TicketList";

function App() {
  // intial state of tickets
  const initalState = { tickets: [] };
  const [state, dispatch] = useReducer(ticketReducer, initalState);
  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch} editingTicket={state.editingTicket} />
        {state.tickets.length > 0 && (
          <div className="results">
            <h2>All Tickets</h2>
            <TicketList tickets={state.tickets} dispatch={dispatch} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
