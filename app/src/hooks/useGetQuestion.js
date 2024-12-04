import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const useGetQuestion = () => {
  const { id } = useParams();
  const { quizzes } = useSelector((state) => state.quizzes);
  const { title, questions } = quizzes.find((q) => q.id === parseInt(id));
  return { title, questions };
};
