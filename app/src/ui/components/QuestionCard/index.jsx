import { useGetQuestion } from "../../../hooks/useGetQuestion";
import { questionType } from "../../../enums/questionType";
import { useHandleAnswer } from "../../../hooks/useHandleAnswer";

const QuestionCard = ({ index, setAnswers }) => {
  const { questions } = useGetQuestion();
  const question = questions[index];
  const { handleOption, handleInput } = useHandleAnswer({ index, setAnswers });

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
                onChange={handleOption}
              />
              {o}
            </label>
          ))}
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
