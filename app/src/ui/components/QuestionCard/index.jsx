import { useGetQuestion } from "../../../hooks/useGetQuestion";
import { questionType } from "../../../enums/questionType";
import { useState } from "react";
import { updateAnswer } from "../../../lib/local_data_source/redux/quizzes/slice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const QuestionCard = ({ index }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(null);
  const { questions } = useGetQuestion();
  const question = questions[index];
  const handleOption = (e) => {
    console.log(e.target.value, " was selected");
    setSelectedOption(e.target.value);
    dispatch(
      updateAnswer({ quizId: id, questionIndex: index, answer: e.target.value })
    );
  };
  const handleInput = (e) => {
    const userAnswer = e.target.value.trim();
    console.log(question.correctAnswer);
    console.log(userAnswer);
    console.log("the question is ", userAnswer === question.correctAnswer);
    dispatch(
      updateAnswer({ quizId: id, questionIndex: index, answer: userAnswer })
    );
  };

  return (
    <div>
      <h4>{question.content}</h4>
      <br />
      {question.type === questionType.option && (
        <div className="flex column gap20 pd-20">
          {question.options.map((o) => (
            <label key={o}>
              <input
                type="radio"
                name={index}
                value={o}
                checked={selectedOption === o}
                onChange={handleOption}
              />
              {o}
            </label>
          ))}

          {/* checked={
                selectedValue ===
                "option3"
            }                                  */}
        </div>
      )}
      {question.type === questionType.input && (
        <div>
          <input
            type="text"
            className="input-text"
            placeholder="Your answer"
            onChange={handleInput}
          />
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
