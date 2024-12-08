import { useSelector, useDispatch } from "react-redux";
import Header from "../../../ui/components/Header";
import "../../../ui/styles/app.css";
import QuizCard from "../../../ui/components/QuizCard";

const HomePage = () => {
  const { quizzes, isLoading, error } = useSelector((state) => state.quizzes);

  console.log(quizzes);
  return (
    <>
      <Header />
      {isLoading && (
        <div>
          <h4> Loading quizzes ...</h4>
        </div>
      )}
      <div className="flex justify-center gap">
        {quizzes.map((q, index) => (
          <QuizCard
            key={index}
            id={q._id}
            title={q.title}
            description={q.description}
          />
        ))}
      </div>
      {error && (
        <div>
          <h4> Error Loading Quizzes: {error}</h4>
        </div>
      )}
    </>
  );
};

export default HomePage;
