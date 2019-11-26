import React,  { useState } from 'react';
import styled from 'styled-components';

import Container from '../../components/container';

import { Loading, Header } from './styles';
import Row from '../../components/row';
import logo from '../../img/code-flat.png';


const buttons = [
  { id: 0, text: 'CIMA' },
  { id: 1, text: 'BAIXO' },
  { id: 2, text: 'ESQUERDA' },
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
        Ajude o Carro a chegar em casa
      </Question>

      <img>
      
      </img>

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

const Question = styled.div`
  font-size: 24px;
`;

const Queue = styled.div`
  border-style: dotted;
  border-width: 2px;
  border-color: #bbb;
  width: 100%;
  height: 100px;
  margin: 16px 0px;
  padding: 8px;
  color: #777;
`;

const Button = styled.button`
  border: none;
  margin: 4px;
  padding: 20px;
  width: auto;
  overflow: visible;
  background: #ddd;
  border-radius: 16px;
  :disabled {
    color: #aaa;
    background: #eee;
  }
`;

const ButtonExecute = styled(Button)`
  background: #17a320;
  color: #fff
`;