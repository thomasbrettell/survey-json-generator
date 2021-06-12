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

  function updateQuestions(updatedObject) {
    const questionsUpdated = [...props.questions];
    const targetIndex = props.questions.findIndex(question=>question.question_number===updatedObject.question_number)
    questionsUpdated[targetIndex] = updatedObject
    props.onUpdateQuestions(questionsUpdated)
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
            data={question}
            key={question.question_number}
            onUpdateQuestion={updateQuestions}
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