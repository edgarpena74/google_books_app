// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Saved from "./components/Saved/Saved";
import Search from "./components/Search/Search";
// import SearchResults from "./components/Search/SearchResults";

function App() {
  return (
    <div className="App">
      <Nav />
      <Search />
      {/* <SearchResults /> */}
      <Saved />
    </div>
  );
}

export default App;
