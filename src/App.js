import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import SearchBar from "./components/Searchbar";

function App() {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <div className="App">
      </div>
    </div>
  );
}

export default App;
