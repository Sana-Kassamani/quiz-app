import { useSelector } from "react-redux";

const QuizPage = () => {
  const quizzes = useSelector((state) => state.quizzes);
  const { id } = useParams();
  const quiz = quizzes.find((q) => q.id === id);

  return (
    <>
      <p>{quiz}</p>
    </>
  );
};

export default QuizPage;
