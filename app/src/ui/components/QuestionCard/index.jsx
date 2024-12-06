import { useGetQuestion } from "../../../hooks/useGetQuestion";
import { questionType } from "../../../enums/questionType";
import { useHandleAnswer } from "../../../hooks/useHandleAnswer";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  TextField,
  Radio,
  Box,
  Typography,
} from "@mui/material";

const QuestionCard = ({ index, setAnswers }) => {
  const { questions } = useGetQuestion();
  const question = questions[index];
  const { handleOption, handleInput } = useHandleAnswer({ index, setAnswers });

  return (
    <Box
      component="section"
      sx={{ p: 2, border: "1px solid grey", m: 2, maxWidth: 500 }}
    >
      <Typography gutterBottom variant="h6" component="div">
        {question.content}
      </Typography>
      <br />
      {question.type === questionType.option && (
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
          <RadioGroup>
            {question.options.map((o) => (
              <FormControlLabel value={o} control={<Radio />} label={o} />
            ))}
          </RadioGroup>
        </FormControl>
      )}

      {question.type === questionType.input && (
        <div>
          <TextField
            id="outlined-basic"
            label="Your answer"
            variant="outlined"
            onChange={handleInput}
          />
        </div>
      )}
    </Box>
  );
};

export default QuestionCard;
