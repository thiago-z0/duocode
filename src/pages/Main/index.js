import React,  { useState } from 'react';
import styled from 'styled-components';

import Container from '../../components/container';

import { Loading, Header, Question, Queue, Button, ButtonExecute } from './styles';
import Row from '../../components/row';
import logo from '../../img/code-flat.png';
import fase1 from '../../img/fase1.jpg'
import preguntas from '../../services/Questions';


const buttons = [
  { id: 0, text: 'ENTÃO IR PARA CIMA' },
  { id: 1, text: 'E ESTIVER EM BAIXO' },
  { id: 2, text: 'SE FOR BATER' },
  { id: 3, text: 'ENTÃO IR PARA BAIXO' },
  { id: 4, text: 'E ESTIVER EM CIMA' },
  { id: 5, text: 'SE FOR BATER' },
]


export default function Main() {

  const [ queue, setQueue ] = useState([]);

  const addButtonToQueue = buttonData => () => {
    setQueue(prev => [ ...prev, buttonData ]);
  }

  const removeButtonFromQueue = buttonData => () => {
    setQueue(prev => prev.filter(item => item.id !== buttonData.id));
  }

  return (
    <Container>
       <Header>
          <img src={logo} alt='Logo'></img>
          <h1>  CodeX</h1>
        </Header>
        <Row/>
      <Question>
        Ajude o Carro a chegar ao fim
      </Question>

      <img src={fase1}/>

      <Queue>
        Fila de execução<br />
        {queue.map(item => (
          <Button
            key={item.id}
            onClick={removeButtonFromQueue(item)}
          >
            {item.text}
          </Button>
        ))}
      </Queue>

      {buttons.map(item => (
        <Button
          key={item.id}
          onClick={addButtonToQueue(item)}
          disabled={queue.includes(item)}
        >
          {item.text}
        </Button>
      ))}

      <br />

      <ButtonExecute>
        EXECUTAR
      </ButtonExecute>
    </Container>
  );
}

