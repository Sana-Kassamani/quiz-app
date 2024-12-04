import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
