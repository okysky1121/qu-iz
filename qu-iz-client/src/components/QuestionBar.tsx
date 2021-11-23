import { Component } from 'react';
import styled from 'styled-components';
import QuestionIndicator from './QuestionIndicator';
import arrow from '../icons/arrow.svg';

const Layout = styled.div`
  height: 56px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  top: 8px;
`;

const Icon = styled.img`
  position: absolute;
  top: 16px;
  left: 20px;
`;

export default class QuestionBar extends Component<{
  current: number;
  max: number;
}> {
  render() {
    return (
      <Layout>
        <QuestionIndicator {...this.props} />
        <Icon src={arrow} alt="back" />
      </Layout>
    );
  }
}
