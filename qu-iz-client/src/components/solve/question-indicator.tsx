import { Component } from 'react';
import styled from 'styled-components';
import QuestionGraph from './question-graph';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 204px;
  height: 43px;
  left: calc(50% - 204px / 2);
  top: calc(50% - 43px / 2 + 5.5px);
`;

const Text = styled.span`
  position: static;
  height: 27px;
  left: 59.5px;
  top: 0px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #000017;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 0px;
`;

class QuestionIndicator extends Component<{ max: number; current: number }> {
  render() {
    return (
      <Layout>
        <Text>{this.props.max - this.props.current} 문제 남음</Text>
        <QuestionGraph bg="#E4E5E5" color="#F18A51" {...this.props} />
      </Layout>
    );
  }
}

export default QuestionIndicator;
