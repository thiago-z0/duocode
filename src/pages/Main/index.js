import React, { Component } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import logo from '../../img/stethoscope.svg';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/container';
import Row from '../../components/row';
import { Loading, Header } from './styles';

export default class Main extends Component {
  state ={
    loading: false,
    doctors: [],
  }


  render() {
    const { loading } = this.state;

    if (loading) {
      return (
        <Loading loading={loading}>
          {loading ? (
            <AiOutlineLoading color="#fff" size={80} />
          ) : (
            <AiOutlineLoading display="none" />
          )}
        </Loading>
      );
    }


    return(

      <Container>
        <Header>
          <img src={logo} alt='Logo'></img>
          <h1>Doctor_Crud</h1>
        </Header>
        <Row/>
      </Container>
    )
  }

}