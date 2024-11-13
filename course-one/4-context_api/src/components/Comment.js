// import { useContext } from "react";
// import UserInfoContext from "../context/UserInfoContext";
const Comment = ({ username, isAdmin }) => {
  //   const { username, isAdmin } = useContext(UserInfoContext);
  return (
    <div>
      <h3>Comments</h3>
      <p>Logged in as {username} </p>
      {isAdmin && <button>Edit comment</button>}
    </div>
  );
};

export default Comment;
