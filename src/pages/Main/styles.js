import styled, { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 0.8s linear infinite;
      }
    `}
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
    img {
    width: 60px;
    margin: 10px;
    }
    h1 {
      font-size: 30px;
      color: #BC69E4;
    }
`;

export const Search = styled.form`
  display: flex;
  flex-direction: row;
  float: right !important;

  a{
    flex: 1;
    border: 0px solid #555;
    padding: 10px 40px;
    border-radius: 4px;
    font-size: 16px;
    float: right;
    color: #222;
    background-color:#fff;
    box-shadow: 0 0 8px rgba(34,67,80, 0.4);
    transition: all 0.2s linear;

  &:hover{
    background-color:#093087;
    color: #fff;
    transition: all 0.2s linear;
  }

  }

  input{
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }

  &:hover{
    background-color:#093087;
    color: #fff;
    transition: all 0.2s linear;
  }}
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

h1 {
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
  color: #555;
}
`;

export const Content = styled.div`

 ul {
  margin-top: 100px;
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;
  color: #444;

  
  li{
    display: flex;
    min-height: 180px;
    flex-direction: column;
    background-color: #fff;
    border-radius: 4px;
    padding: 10px;
    transition: all 0.2s linear;
    border: 1px #f5f5f5 solid;
    box-shadow: 0 0 15px rgba(34,67,80, 0.1);

    span{
      font-size: 14px;
      color: #888;
    }

    h4 {
      border-bottom: 1px #999 solid;
      margin: 5px 0px;
    }

    p{
    font-size: 12px;
    margin: 3px;
    border-radius: 4px;
    float: right;
    }

    &:hover{
      cursor: pointer;
      box-shadow: 0 0 15px rgba(34,67,80, 0.4);
      background-color: #fff;
      transition: all 0.2s linear;
    }
  }}
  

`;
export const Question = styled.div`
  font-size: 24px;
`;

export const Queue = styled.div`
  border-style: dotted;
  border-width: 2px;
  border-color: #bbb;
  width: 100%;
  height: 100px;
  margin: 16px 0px;
  padding: 8px;
  color: #777;
`;

export const Button = styled(motion.button)`
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

export const ButtonExecute = styled(Button)`
  background: #17a320;
  color: #fff;
`;

export const ModalBack = styled(motion.div)`
  background: rgba(0, 0, 0, .5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 64px;
`;

export const Modal = styled(motion.div)`
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
    margin: 0;
  }
  h2 {
    font-size: 24px;
    margin: 24px 0px;
  }
`;