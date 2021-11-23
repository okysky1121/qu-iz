import { Component } from 'react';
import styled from 'styled-components';
import LinearGraph from './LinearGraph';

const Layout = styled.div`
  height: 36px;
  width: 204px;

  margin-top: 20px;
`;

const Text = styled.span`
  font-weight: 800;
  font-size: 18px;
  color: var(--Dark-Gray);

  display: inline-block;
  position: relative;
  transform: translateX(-50%);
  left: 50%;
`;

export default class QuestionIndicator extends Component<{
  current: number;
  max: number;
}> {
  render() {
    return (
      <Layout>
        <Text>{this.props.max - this.props.current} 문제 남음</Text>
        <LinearGraph percent={(this.props.current / this.props.max) * 100} />
      </Layout>
    );
  }
}
