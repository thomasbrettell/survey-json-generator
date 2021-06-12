import { 
  Card, 
  CardContent, 
  TextField, 
  Select, 
  FormControl, 
  InputLabel,
  MenuItem 
} 
from '@material-ui/core';
import styles from './QuestionCard.module.css';

function QuestionCard(props) {  
  let currentQuestion = props.data
  function titleUpdateHandler(event) {
    currentQuestion.question = event.target.value
    props.onUpdateQuestion(currentQuestion)
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

        {/* <FormControl variant="outlined" className={styles['input-select']}>
          <InputLabel id="questiom-type-select-label">Question type</InputLabel>
          <Select
            labelId="questiom-type-select-label"
            id="question-type-select"
            label="Question type"
          >
            <MenuItem value=""><em>Select a question type</em></MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl> */}

      </div>
    </CardContent>
  </Card>
  )
}

 export default QuestionCard;