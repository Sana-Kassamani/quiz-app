import { useSelector, useDispatch } from "react-redux";
import Header from "../../../ui/components/Header";
import "../../../ui/styles/app.css";
import { useEffect } from "react";
import { loadQuizzes } from "../../local_data_source/redux/quizzes/slice";
import { getQuizzes } from "../../remote_data_source/quizApi";
import QuizCard from "../../../ui/components/QuizCard";

const HomePage = () => {
  const { quizzes } = useSelector((state) => state.quizzes);
  const dispatch = useDispatch();

  useEffect(() => {
    const quizzes = getQuizzes();
    dispatch(loadQuizzes(quizzes));
  }, []);
  console.log(quizzes);
  return (
    <>
      <Header />
      <div className="flex justify-center gap">
        {quizzes.map((q, index) => (
          <QuizCard
            key={index}
            id={q.id}
            title={q.title}
            description={q.description}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
