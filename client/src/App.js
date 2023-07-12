import { AllRouter } from "./AllRouter/AllRouter";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <AllRouter />
      </Router>
    </div>
  );
}

export default App;
