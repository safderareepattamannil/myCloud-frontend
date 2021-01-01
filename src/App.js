import "./App.css";
import Browser from "./components/Browser";
import Upload from "./components/Upload";

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Upload/>
        <Browser/>
      </div>
    </div>
  );
}

export default App;
