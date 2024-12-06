import { Box, Button, Typography } from "@mui/material";
import { useGetQuestion } from "../../../hooks/useGetQuestion";
import { useHandleSubmit } from "../../../hooks/useHandleSubmit";
import QuestionCard from "../../../ui/components/QuestionCard";
import "../../../ui/styles/app.css";
import { useState } from "react";

const QuizPage = () => {
  const { title, questions } = useGetQuestion();
  const [error, setError] = useState("");
  const [answers, setAnswers] = useState(new Array(questions.length).fill(""));
  const { handleSubmit } = useHandleSubmit({ setError, questions, answers });
  return (
    <>
      <Box component="section" sx={{ p: 2, m: 2 }}>
        <Typography variant="h4"> {title}</Typography>
        <Typography variant="h6">{questions.length} Questions</Typography>
        {/* <h2>{title}</h2>
        <h3>{questions.length} Questions</h3> */}
      </Box>
      {questions.map((q, index) => (
        <QuestionCard index={index} key={index} setAnswers={setAnswers} />
      ))}
      <div>
        {error && <p>{error}</p>}
        <Button
          sx={{ marginTop: 2 }}
          size="small"
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default QuizPage;
