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

    console.log(surveyJSON)

    setSurveyJSON((prevState) => ({
      ...prevState,
      questions: [
        ...prevState.questions,
        newQuestion
      ]
    }));
}

  return (
    <Container disableGutters className={styles.app} maxWidth='sm'>
      <SurveyGenerator
        onAddQuestion={addQuestion}
        onUpdateTitle={updateTitle}
        questions={surveyJSON.questions}
      />
      <JSONOutput
        json={surveyJSON}
      />
    </Container>
  );
}

export default App;
