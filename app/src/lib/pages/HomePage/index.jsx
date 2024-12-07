import { useSelector, useDispatch } from "react-redux";
import Header from "../../../ui/components/Header";
import "../../../ui/styles/app.css";
import QuizCard from "../../../ui/components/QuizCard";

const HomePage = () => {
  const { quizzes } = useSelector((state) => state.quizzes);

  console.log(quizzes);
  return (
    <>
      <Header />
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
    </>
  );
};

export default HomePage;
