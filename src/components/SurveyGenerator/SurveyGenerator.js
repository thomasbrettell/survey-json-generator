import { Paper, CardContent, TextField, Divider, Fab, CardHeader } from '@material-ui/core';
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

  function deleteQuestion(questionNumber) {
    let questionsUpdated = [...props.questions];
    questionsUpdated = questionsUpdated.filter(question=>question.question_number!==questionNumber)
    for(var i = 0; i !== questionsUpdated.length; i++) {
      questionsUpdated[i].question_number = i+1
    }
    props.onUpdateQuestions(questionsUpdated)
  }

  return (
    <Paper variant={'outlined'}>
      <CardHeader titleTypographyProps={{variant:'h6' }} title={'Survey Generator'} />
      <Divider />
      <CardContent>
        <TextField
          fullWidth
          label={'Survey title'}
          multiline
          onChange={onUpdateTitle}
        />
      </CardContent>
      <Divider />
      <CardContent className={styles.body}>
        {props.questions.map(question => (
          <QuestionCard
            key={question.key}
            data={question}
            onUpdateQuestion={updateQuestions}
            onDeleteQuestion={deleteQuestion}
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