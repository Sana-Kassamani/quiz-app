import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const useGetQuestion = () => {
  const { id } = useParams();
  const { quizzes } = useSelector((state) => state.quizzes);

  try {
    if (quizzes) {
      const { title, questions } = quizzes.find((q) => q._id === id);
      return { title, questions };
    } else {
      return null;
    }
  } catch (error) {
    console.error(error.message);
  }
};
