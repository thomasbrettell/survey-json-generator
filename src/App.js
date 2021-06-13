import {useState} from 'react';
import styles from './App.module.css';
import { Container } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

import SurveyGenerator from './components/SurveyGenerator/SurveyGenerator';
import JSONOutput from './components/JSONOutput/JSONOutput';

var questionID = 0;
function App() {
  const [surveyJSON, setSurveyJSON] = useState({
    title: '',
    questions: []
  })

  function updateTitle(title) {
    setSurveyJSON((prevState) => ({
      ...prevState, title: title
    }));
  }

  function addQuestion() {
    let newQuestion = {
      key: questionID,
      question_number: surveyJSON.questions.length + 1,
      question: ''
    }

    setSurveyJSON((prevState) => ({
      ...prevState,
      questions: [
        ...prevState.questions,
        newQuestion
      ]
    }));

    questionID++;
  }

  function updateQuestions(questions) {
    setSurveyJSON((prevState) => ({
      ...prevState,
      questions: questions
    }));
  }

  return (
    <Container disableGutters className={styles.app} maxWidth='sm'>
      <a href='https://github.com/thomasbrettell/survey-json-generator' target='_blank' rel="noreferrer"><GitHubIcon className={styles.icon}/></a>
      <a href='https://thomasbrettell.com/' target='_blank' rel="noreferrer"><LanguageIcon className={styles.icon}/></a>
      <SurveyGenerator
        onAddQuestion={addQuestion}
        onUpdateTitle={updateTitle}
        onUpdateQuestions={updateQuestions}
        questions={surveyJSON.questions}
      />
      <JSONOutput
        json={surveyJSON}
      />
    </Container>
  );
}

export default App;
