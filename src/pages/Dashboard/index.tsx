import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="logo" />
      <Title>Explore repositórios no GitHub</Title>
      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="button">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="TESTE">
          <img
            src="https://avatars2.githubusercontent.com/u/64475947?s=460&u=3e8eca98f2b4152c1717bf8c09189f92d0f35ac5&v=4"
            alt="user"
          />
          <div>
            <strong>Repositório/daora</strong>
            <p>Super daora repositório top</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="TESTE">
          <img
            src="https://avatars2.githubusercontent.com/u/64475947?s=460&u=3e8eca98f2b4152c1717bf8c09189f92d0f35ac5&v=4"
            alt="user"
          />
          <div>
            <strong>Repositório/daora</strong>
            <p>Super daora repositório top</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="TESTE">
          <img
            src="https://avatars2.githubusercontent.com/u/64475947?s=460&u=3e8eca98f2b4152c1717bf8c09189f92d0f35ac5&v=4"
            alt="user"
          />
          <div>
            <strong>Repositório/daora</strong>
            <p>Super daora repositório top</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
