import { useParams, useNavigate } from "react-router-dom";
import { updateScore } from "../../lib/local_data_source/redux/user/slice";
import { useDispatch, useSelector } from "react-redux";
import { editScore } from "../../lib/remote_data_source/editScore";

export const useHandleSubmit = ({ setError, questions, answers }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  function handleSubmit() {
    var quizScore = 0;
    var fullScore = 0;
    var count = 0;
    try {
      console.log(answers);
      answers.forEach((a, index) => {
        if (!a) {
          throw Error("All questions are required");
        }
        if (a === questions[index].correctAnswer) {
          quizScore += questions[index].score;
          count += 1;
        }
        fullScore += questions[index].score;
      });
      console.log("score is ", quizScore);
      // dispatch(finishQuiz({ id, quizScore }));
      dispatch(updateScore({ score: quizScore }));
      dispatch(editScore(quizScore));
      navigate("/home/result", {
        state: {
          quizScore,
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
