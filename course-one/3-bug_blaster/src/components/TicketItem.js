const TicketItem = ({ ticket, dispatch }) => {
  // distructuring
  const { id, title, description, priority } = ticket;

  const priorityClass = {
    1: "priority-low",
    2: "priority-medium",
    3: "priority-high",
  };
  return (
    <div className="ticket-item">
      <div className={`priority-dot ${priorityClass[priority]}`}></div>
      <h3>{title}</h3>
      <h3>{description}</h3>
      <button
        className="button"
        onClick={() => dispatch({ type: "DELETE-TICKET", payload: { id: id } })}
      >
        Delete
      </button>
      <button
        className="button"
        onClick={() =>
          dispatch({ type: "SET-EDITING-TICKET", payload: ticket })
        }
      >
        Edit
      </button>
    </div>
  );
};

export default TicketItem;
