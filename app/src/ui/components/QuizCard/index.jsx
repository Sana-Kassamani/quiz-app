import { useNavigate } from "react-router-dom";
const QuizCard = ({ id, title, description }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/quiz/${id}`);
  };
  return (
    <div className="flex column gap">
      <h2>{title}</h2>
      <h4>{description}</h4>
      <button onClick={handleClick}>Sit for quiz</button>
    </div>
  );
};

export default QuizCard;
