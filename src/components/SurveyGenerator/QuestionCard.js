import React from 'react';
import { 
  Card, 
  CardContent, 
  TextField, 
  Select, 
  FormControl, 
  InputLabel,
  MenuItem,
  Button,
  Typography,
  List,
  ListItem,
  IconButton,
  InputBase,
  Divider
} 
from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import styles from './QuestionCard.module.css';

var optionID = 0;
function QuestionCard(props) {  

  let currentQuestion = props.data

  function questionUpdateHandler(event) {
    currentQuestion.question = event.target.value
    props.onUpdateQuestion(currentQuestion)
  }

  function deleteQuestionHandler() {
    props.onDeleteQuestion(currentQuestion.question_number)
  }

  function selectQuestionTypeHandler(event) {
    currentQuestion.question_type = event.target.value;
    if(currentQuestion.question_type === 'mutliple-choice') {
      currentQuestion.options = [];
    } else {
      delete currentQuestion.options;
    }
    props.onUpdateQuestion(currentQuestion);
  }

  function addOptionHandler() {
    currentQuestion.options.push(
      {
        key: optionID,
        option_number: currentQuestion.options.length+1,
        option: ''
      })
    props.onUpdateQuestion(currentQuestion);
    optionID++;
  }

  function deleteOptionHandler(optionNumber) {
    currentQuestion.options = currentQuestion.options.filter(option=>option.option_number!==optionNumber)
    for(var i = 0; i !== currentQuestion.options.length; i++) {
      currentQuestion.options[i].option_number = i+1;
    }
    props.onUpdateQuestion(currentQuestion);
  }

  function onUpdateOption(event, optionNumber) {
    currentQuestion.options[optionNumber-1].option = event.target.value
    props.onUpdateQuestion(currentQuestion);
  }

  if(currentQuestion.options) {
    var optionsContent = (
      <CardContent>
        <List dense className={styles.options} disablePadding>
          <div className={styles.end}>
            <Button
              className={styles['add-option-btn']}
              color={'primary'}
              size={'small'}
              onClick={addOptionHandler}
            >ADD OPTION</Button>
          </div>
        {currentQuestion.options.map(option => (
          <React.Fragment
            key={option.key}
          >
          <ListItem>
            <div className={styles['option-number']}><sup>O{option.option_number}</sup></div>
            <InputBase
              placeholder={'Enter option'}
              defaultValue=""
              size="small"
              fullWidth 
              onChange={(event) => onUpdateOption(event, option.option_number)}
              multiline
            />
            <IconButton
              size={'small'}
              onClick={() => deleteOptionHandler(option.option_number)}
            >
              <ClearIcon />
            </IconButton>
          </ListItem>
          <Divider />
          </React.Fragment>
        ))}
        </List>
      </CardContent>
    )
  }

  return (
  <Card className={styles['question-card']} elevation={0}>
    <CardContent className={styles.between}>
      <Typography variant="overline" gutterBottom>
        QUESTION {currentQuestion.question_number}
      </Typography>
      <Button
          onClick={deleteQuestionHandler}
          color={'primary'}
        >Delete</Button>
    </CardContent>
    <CardContent>
      <div className={styles.even}>
        <TextField
          label="Question"
          variant="outlined"
          multiline
          onChange={questionUpdateHandler}
        />
        <FormControl variant="outlined" className={styles['input-select']}>
          <InputLabel id="questiom-type-select-label">Question type</InputLabel>
          <Select
            defaultValue = {''}
            labelId="questiom-type-select-label"
            id="question-type-select"
            label="Question type"
            onChange={selectQuestionTypeHandler}
          >
            <MenuItem value={''}><em>Select a question type</em></MenuItem>
            <MenuItem value={'mutliple-choice'}>Multiple choice</MenuItem>
            <MenuItem value={'short-answer'}>Short answer</MenuItem>
            <MenuItem value={'long-answer'}>Long answer</MenuItem>
          </Select>
        </FormControl>
      </div>
    </CardContent>
    {optionsContent}
  </Card>
  )
}

 export default QuestionCard;