import Comment from "./Comment";

const Post = ({ username, isAdmin }) => {
  return (
    <div>
      <h1>Example Post Title</h1>
      <p>This is an example of post content</p>
      <Comment username={username} isAdmin={isAdmin} />
    </div>
  );
};

export default Post;
