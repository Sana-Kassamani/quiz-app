import { useGetQuestion } from "../../../hooks/useGetQuestion";
import QuestionCard from "../../../ui/components/QuestionCard";
import "../../../ui/styles/app.css";

const QuizPage = () => {
  const { title, questions } = useGetQuestion();
  const handleSubmit = () => {
    console.log(questions);
  };
  return (
    <>
      <div className="flex column gap pd-20">
        <h2>{title}</h2>
        <h3>{questions.length} Questions</h3>
      </div>
      <div>
        {questions.map((q, index) => (
          <QuestionCard index={index} key={index} />
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default QuizPage;
