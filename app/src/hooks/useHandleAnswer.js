import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateAnswer } from "./../lib/local_data_source/redux/quizzes/slice.js";

export const useHandleAnswer = ({ index, setAnswers }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleOption = (e) => {
    setAnswers((prev) => {
      prev[index] = e.target.value;
      return prev;
    });
  };
  const handleInput = (e) => {
    const userAnswer = e.target.value.trim();
    // dispatch(
    //   updateAnswer({ quizId: id, questionIndex: index, answer: userAnswer })
    // );
    setAnswers((prev) => {
      prev[index] = userAnswer;
      return prev;
    });
  };
  return { handleOption, handleInput };
};
