import {useState} from 'react';
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
  const [updatedObject, setUpdatedObject] = useState(props.data)

  console.log(updatedObject)

  function titleUpdateHandler(event) {
    setUpdatedObject((prevState) => ({
      ...prevState, question: event.target.value
    }))

    props.onUpdateQuestion(updatedObject)
  }

  return (
  <Card className={styles['question-card']}>
    <CardContent>
      <div className={styles.row}>
        <TextField
          value={updatedObject.question}
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