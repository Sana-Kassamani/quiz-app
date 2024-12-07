import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const QuizCard = ({ id, title }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/home/quiz/${id}`);
  };
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginTop: 2 }}>
        <Button size="small" variant="contained" onClick={handleClick}>
          Sit for quiz
        </Button>
      </CardActions>
    </Card>
  );
};

export default QuizCard;
