import {useState} from 'react';
import styles from './App.module.css';
import { Container } from '@material-ui/core';

import SurveyGenerator from './components/SurveyGenerator/SurveyGenerator';
import JSONOutput from './components/JSONOutput/JSONOutput';

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
  }

  function updateQuestions(questions) {
    setSurveyJSON((prevState) => ({
      ...prevState,
      questions: questions
    }));
  }

  return (
    <Container disableGutters className={styles.app} maxWidth='sm'>
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
