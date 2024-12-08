import { useLocation, useNavigate } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { quizScore, fullScore, count, fullCount } = location.state || {};
  const handleClick = () => {
    navigate("/home", { state: {} });
  };
  return (
    <div className="flex column full-height justify-center align-center gap">
      <h2>
        {count} out of {fullCount} Questions are correct.
      </h2>
      <h2>
        Score: {quizScore} / {fullScore}
      </h2>
      <button onClick={handleClick}>Back to Home</button>
    </div>
  );
};

export default ResultPage;
