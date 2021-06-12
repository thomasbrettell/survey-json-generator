import { 
  Card, 
  CardContent, 
  TextField, 
  Select, 
  FormControl, 
  InputLabel,
  MenuItem,
  Button,
  Typography
} 
from '@material-ui/core';
import styles from './QuestionCard.module.css';

function QuestionCard(props) {  

  let currentQuestion = props.data

  function titleUpdateHandler(event) {
    currentQuestion.question = event.target.value
    props.onUpdateQuestion(currentQuestion)
  }

  function deleteQuestionHandler() {
    props.onDeleteQuestion(currentQuestion.question_number)
  }

  function selectQuestionTypeHandler(event) {
    currentQuestion.question_type = event.target.value
    props.onUpdateQuestion(currentQuestion)
  }

  return (
  <Card className={styles['question-card']}>
    <CardContent>
    <Typography variant="overline" gutterBottom>
          QUESTION {currentQuestion.question_number}
        </Typography>
    </CardContent>
    <CardContent>
      <div className={styles.row}>
        <TextField
          label="Question"
          variant="outlined"
          onChange={titleUpdateHandler}
        />
        <FormControl variant="outlined" className={styles['input-select']}>
          <InputLabel id="questiom-type-select-label">Question type</InputLabel>
          <Select
            labelId="questiom-type-select-label"
            id="question-type-select"
            label="Question type"
            onChange={selectQuestionTypeHandler}
          >
            <MenuItem><em>Select a question type</em></MenuItem>
            <MenuItem value={'mutliple-choice'}>Multiple choice</MenuItem>
            <MenuItem value={'short-answer'}>Short answer</MenuItem>
            <MenuItem value={'long-answer'}>Long answer</MenuItem>
          </Select>
        </FormControl>
      </div>
    </CardContent>
    <CardContent className={styles['position-right']}>
        <Button
          onClick={deleteQuestionHandler}
          color={'primary'}
        >Delete</Button>
    </CardContent>
  </Card>
  )
}

 export default QuestionCard;