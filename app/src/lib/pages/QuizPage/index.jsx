import { useGetQuestion } from "../../../hooks/useGetQuestion";
import { useHandleSubmit } from "../../../hooks/useHandleSubmit";
import QuestionCard from "../../../ui/components/QuestionCard";
import "../../../ui/styles/app.css";
import { useState } from "react";

const QuizPage = () => {
  const { title, questions } = useGetQuestion();
  const [error, setError] = useState("");
  const [answers, setAnswers] = useState(new Array(questions.length).fill(""));
  const { handleSubmit } = useHandleSubmit({ setError, questions, answers });
  return (
    <>
      <div className="flex column gap pd-20">
        <h2>{title}</h2>
        <h3>{questions.length} Questions</h3>
      </div>
      <div>
        {questions.map((q, index) => (
          <QuestionCard index={index} key={index} setAnswers={setAnswers} />
        ))}
      </div>
      <div>
        {error && <p>{error}</p>}
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default QuizPage;
