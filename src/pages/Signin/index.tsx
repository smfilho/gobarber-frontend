import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber"/>
      <form>
        <h1>Login</h1>

        <Input placeholder="E-mail"/>

        <Input type="password" placeholder="Password"/>

        <Button type="submit">Enter</Button>

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
