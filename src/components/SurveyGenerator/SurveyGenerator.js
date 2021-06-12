import {useState} from 'react';
import { Paper, CardContent, TextField, Divider, Fab } from '@material-ui/core';
import styles from './SurveyGenerator.module.css';

import QuestionCard from './QuestionCard';

function SurveyGenerator(props) {
  function onUpdateTitle(event) {
    props.onUpdateTitle(event.target.value)
  }

  function onClickHandler() {
    props.onAddQuestion()
  }

  return (
    <Paper variant={'outlined'}>
      <CardContent>
        <TextField
          fullWidth
          label={'Survey title'}
          onChange={onUpdateTitle}
        />
      </CardContent>
      <Divider />
      <CardContent className={styles.body}>
        {props.questions.map(question => (
          <QuestionCard
            key={question.question_number}
          />
        ))}
        <Fab
          size={'small'}
          variant={'extended'}
          onClick={onClickHandler}
        >ADD QUESTION</Fab>
      </CardContent>
    </Paper>
  )
}

export default SurveyGenerator