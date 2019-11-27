import React, { useState } from 'react';

import Container from '../../components/container';

import { Header, Question, Queue, Button, ButtonExecute, ModalBack, Modal } from './styles';
import Row from '../../components/row';
import logo from '../../img/code-flat.png';
import fase1 from '../../img/fase1.jpg'

const buttons = [
  { id: 0, text: 'BAIXO' },
  { id: 1, text: 'BAIXO' },
  { id: 2, text: 'ACELERAR' },
  { id: 3, text: 'CIMA' },
]

export default function Main({
  next,
}) {

  // const [ queue, setQueue ] = useState([]);

  // const addButtonToQueue = buttonData => () => {
  //   setQueue(prev => [ ...prev, buttonData ]);
  // }

  // const removeButtonFromQueue = buttonData => () => {
  //   setQueue(prev => prev.filter(item => item.id !== buttonData.id));
  // }

  const [ isOpenModal, setOpenModal ] = useState(false);

  const onClickExecute = () => {
    setOpenModal(true);
  }

  return (
    <Container>
       <Header>
          <img src={logo} alt='Logo'></img>
          <h1>  CodeX</h1>
        </Header>
        <Row/>
      <Question>
        1 - Ajude o Carro a chegar ao fim
      </Question>

      <img src={fase1} alt='Descrição' />

      <Queue>
        Fila de execução<br />
        {/* {queue.map(item => (
          <Button
            key={item.id}
            onClick={removeButtonFromQueue(item)}
          >
            {item.text}
          </Button>
        ))} */}
      </Queue>

      {buttons.map(item => (
        <Button
          key={item.id}
          // onClick={addButtonToQueue(item)}
          // disabled={queue.includes(item)}
          whileTap={{
            scale: 1.2,
            boxShadow: '5px 5px 7px rgba(0, 0, 0, .5)',
          }}
          drag
          dragConstraints={{
            top: -90,
            left: -200,
            right: 200,
            bottom: 0,
          }}
        >
          {item.text}
        </Button>
      ))}

      <br />

      <ButtonExecute
        onClick={onClickExecute}
      >
        EXECUTAR
      </ButtonExecute>

      {isOpenModal && (
        <ModalBack
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Modal
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .3 }}
          >
            <img
              src='/check-circle.png'
              alt='Done'
            />
            <h2>Certa resposta!</h2>
            <ButtonExecute onClick={next}>
              Continuar
            </ButtonExecute>
          </Modal>
        </ModalBack>
      )}

    </Container>
  );
}

