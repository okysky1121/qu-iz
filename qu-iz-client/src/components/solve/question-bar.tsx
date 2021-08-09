import { Component } from 'react';
import styled from 'styled-components';
import arrow from '../../assets/back_arrow.svg';
import QuestionIndicator from './question-indicator';

const Layout = styled.div`
  position: relative;
  width: 382px;
  height: 52px;
  left: 16px;
  top: 16px;
`;

const Back = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 20px;
  top: calc(50% - 24px / 2 + 2px);
`;

class QuestionBar extends Component<{ max: number }, { current: number }> {
  state = { current: 7 };
  render() {
    return (
      <Layout>
        <Back src={arrow} />
        <QuestionIndicator max={this.props.max} current={this.state.current} />
      </Layout>
    );
  }
}

export default QuestionBar;
