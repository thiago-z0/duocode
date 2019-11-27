import React, { useState } from 'react';

import GlobalStyle from './styles/global';
import Main from './pages/Main';
import Main2 from './pages/Main2';

function App() {
  const [ question, setQuestion ] = useState(0);

  const goToNextQuestion = () => setQuestion(1);
  return (
    <>
      <GlobalStyle />
      {question === 0 ? (
        <Main next={goToNextQuestion} />
      ) : (
        <Main2 />
      )}
    </>
  );
}

export default App;
