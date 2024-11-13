import { useState } from "react";
// reducer manages state in a more centralized way
// separating logic from user actions
// dispatch actions from components(handled by reducer)
//  information gets passed to the reducer in the payload
const TicketForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState("low");

  const priorityLabels = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  const clearForm = () => {
    setTitle("");
    setDesc("");
    setPriority("low");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent page reloading
    const data = {
      id: new Date().toISOString(),
      title: title,
      description: desc,
      priority: priority,
    };
    clearForm();
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <div>
        <label>Title</label>
        <input
          type="text"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          type="text"
          value={desc}
          className="form-input"
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
      </div>
      {/* priority */}
      <fieldset className="priority-fieldset">
        <legend>Priority</legend>
        {Object.entries(priorityLabels).map(([value, label]) => (
          <label key={value} className="priority-label">
            <input
              type="radio"
              className="priority-input"
              value={value}
              checked={priority === value}
              onChange={(e) => setPriority(e.target.value)}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
};

export default TicketForm;
