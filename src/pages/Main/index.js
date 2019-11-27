import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Container from '../../components/container';

import { Header } from './styles';
import Row from '../../components/row';
import logo from '../../img/code-flat.png';

const buttons = [
  { id: 0, text: 'CIMA' },
  { id: 1, text: 'BAIXO' },
  { id: 2, text: 'ESQUERDA' },
]


export default function Main() {

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
        Ajude o Carro a chegar em casa
      </Question>

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
            <ButtonExecute onClick={() => setOpenModal(false)}>
              Continuar
            </ButtonExecute>
          </Modal>
        </ModalBack>
      )}

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

const Button = styled(motion.button)`
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
  color: #fff;
`;

const ModalBack = styled(motion.div)`
  background: rgba(0, 0, 0, .5);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 128px;
`;

const Modal = styled(motion.div)`
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, .8);
  margin: 0 auto;
  padding: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 512px;
  width: 100%;
  img {
    width: 128px;
  }
  h2 {
    font-size: 24px;
    margin: 24px 0px;
  }
`;