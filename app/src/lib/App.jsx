import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./../ui/styles/App.css";
import { Provider } from "react-redux";
import store from "./local_data_source/redux/store";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
