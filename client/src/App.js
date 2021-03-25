import "./App.css";
import Nav from "./components/Nav/Nav";
import Saved from "./components/Saved/Saved";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <Nav />
      <Search />

      <Saved />
    </div>
  );
}

export default App;
