import "./App.css";
import BlogPage from "./components/blogPage";
import UserInfoContext from "./context/UserInfoContext";
import { ThemeProvider } from "./context/ThemeProvider";
import ContentComponent from "./components/ContentComponent";

function App() {
  return (
    <ThemeProvider>
      <ContentComponent />
    </ThemeProvider>
  );
}

export default App;
// function App() {
//   const userInfo = { username: "Lumala", isAdmin: true };
//   return (
//     <UserInfoContext.Provider value={userInfo}>
//       <BlogPage />
//     </UserInfoContext.Provider>
//   );
// }

// export default App;
