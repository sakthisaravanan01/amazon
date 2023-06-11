import "./App.css";
import Header from "./Header";
import Home from "./Home/Home";
function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div style={{ marginTop: "50px" }}>
        <Home />
      </div>
    </div>
  );
}

export default App;
