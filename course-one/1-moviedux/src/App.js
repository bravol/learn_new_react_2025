import Header from "./components/Header";
import "./styles.css";
import "./App.css";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <MoviesGrid />
      </div>
      <Footer />
    </div>
  );
}

export default App;