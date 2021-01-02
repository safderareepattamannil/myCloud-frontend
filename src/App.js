import "./App.css";
import ImageGrid from "./components/ImageGrid";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav/>
        <h1><strong>Hello, </strong>Safder</h1>
        <ImageGrid/>
      </div>
    </div>
  );
}

export default App;
