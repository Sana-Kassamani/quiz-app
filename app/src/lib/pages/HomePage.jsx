import { useSelector } from "react-redux";
import Header from "../../ui/components/Header";
import "./../../ui/styles/app.css";

const HomePage = () => {
  const { quizzes } = useSelector((state) => state.quizzes);
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
