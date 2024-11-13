import { useReducer } from "react";
import "./App.css";
import TicketForm from "./components/TicketForm";
import ticketReducer from "./reducers/ticketReducers";
import "./styles.css";
import TicketList from "./components/TicketList";
import { sortTickets } from "./utilities/sortingUtilities";

//A react hook that allows complex state management logic.
//Alternate to `useState` hook and useful when handling complex state transitions.
//multiple state variables depend on each other and should be updated together, useReducer is more effective.
function App() {
  // intial state of tickets
  const initalState = {
    tickets: [],
    editingTicket: null,
    sortPreference: "High to Low",
  };
  const [state, dispatch] = useReducer(ticketReducer, initalState);
  const sortedTickets = sortTickets(state.tickets, state.sortPreference);
  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch} editingTicket={state.editingTicket} />
        {state.tickets.length > 0 && (
          <div className="results">
            <h2>All Tickets</h2>
            <select
              value={state.sortPreference}
              onChange={(e) =>
                dispatch({
                  type: "SET-SORT-PREFERENCE",
                  payload: e.target.value,
                })
              }
            >
              <option value="High to Low">High to Low</option>
              <option value="Low to High">Low to High</option>
            </select>
            <TicketList tickets={sortedTickets} dispatch={dispatch} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
