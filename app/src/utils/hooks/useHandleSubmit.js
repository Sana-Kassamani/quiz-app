import { useParams, useNavigate } from "react-router-dom";
import {
  finishQuiz,
  updateScore,
} from "../../lib/local_data_source/redux/user/slice";
import { useDispatch } from "react-redux";

export const useHandleSubmit = ({ setError, questions, answers }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  function handleSubmit() {
    var score = 0;
    var fullScore = 0;
    var count = 0;
    try {
      answers.forEach((a, index) => {
        if (!a) {
          throw Error("All questions are required");
        }
        if (a === questions[index].correctAnswer) {
          score += questions[index].score;
          count += 1;
        }
        fullScore += questions[index].score;
      });
      dispatch(finishQuiz({ id, score }));
      dispatch(updateScore());
      navigate("/result", {
        state: {
          score,
          fullScore,
          count,
          fullCount: questions.length,
        },
      });
    } catch (error) {
      setError(error.message);
    }
  }
  return { handleSubmit };
};
