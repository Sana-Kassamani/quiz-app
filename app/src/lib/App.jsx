import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./local_data_source/redux/store";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import QuizzesRoute from "../ui/components/QuizzesRoute";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<QuizzesRoute />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/quiz/:id" element={<QuizPage />} />
              <Route path="/result" element={<ResultPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
