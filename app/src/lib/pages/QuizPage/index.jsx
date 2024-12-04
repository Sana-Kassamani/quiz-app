import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const QuizPage = () => {
  const { quizzes } = useSelector((state) => state.quizzes);
  const { id } = useParams();
  const quiz = quizzes.find((q) => q.id === parseInt(id));
  console.log("id is ", id, " of type ", typeof id);
  console.log("Quizzes is ", quizzes);
  console.log("Quiz is ", quiz);
  return (
    <>
      <div className="flex column gap pd-20">
        <h2>{quiz.title}</h2>
        <h3>{quiz.questions.length} Questions</h3>
      </div>
    </>
  );
};

export default QuizPage;
