import { 
  Card, 
  CardContent, 
  TextField, 
  Select, 
  FormControl, 
  InputLabel,
  MenuItem,
  Button
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

  return (
  <Card className={styles['question-card']}>
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
          >
            <MenuItem><em>Select a question type</em></MenuItem>
            <MenuItem>Ten</MenuItem>
            <MenuItem>Twenty</MenuItem>
            <MenuItem>Thirty</MenuItem>
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