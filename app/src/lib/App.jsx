import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./local_data_source/redux/store";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import QuizzesRoute from "../ui/components/QuizzesRoute";
import ResultPage from "./pages/ResultPage";
import { Container } from "@mui/material";
import Login from "./pages/Login";

function App() {
  return (
    <Container fixed>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<QuizzesRoute />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/home/quiz/:id" element={<QuizPage />} />
              <Route path="/home/result" element={<ResultPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </Container>
  );
}

export default App;
