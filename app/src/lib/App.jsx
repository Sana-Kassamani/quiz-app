import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./local_data_source/redux/store";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import QuizzesRoute from "../ui/components/QuizzesRoute";
import ResultPage from "./pages/ResultPage";
import { Container } from "@mui/material";

function App() {
  return (
    <Container fixed>
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
    </Container>
  );
}

export default App;
