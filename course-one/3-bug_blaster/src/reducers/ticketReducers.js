export default function ticketReducer(state, action) {
  switch (action.type) {
    case "ADD-TICKET":
      return { ...state, tickets: [...state.tickets, action.payload] };

    case "UPDATE-TICKET":
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket.id === action.payload.id ? action.payload : ticket
        ),
      };
    case "DELETE-TICKET":
      return {
        ...state,
        tickets: state.tickets.filter(
          (ticket) => ticket.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
