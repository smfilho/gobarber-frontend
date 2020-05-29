import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber"/>
      <form>
        <h1>Login</h1>

        <input placeholder="E-mail"/>

        <input type="password" placeholder="Password"/>

        <button type="submit">Enter</button>

        <a href="forgot">Forgot Password</a>
      </form>

      <a href="login">
        <FiLogIn />
        Create Account
      </a>
    </Content>

    <Background />
  </Container>

);

export default SignIn;
