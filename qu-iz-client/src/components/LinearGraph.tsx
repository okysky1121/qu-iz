import { Component } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  height: 6px;
  width: 100%;
  border-radius: 43px;
  background-color: var(--Light-Gray);

  margin-top: 10px;
`;

const Progress = styled.div<{ percent: number }>`
  height: 100%;
  width: ${({ percent }) => `${percent}%`};
  border-radius: 43px;
  background-color: var(--Orange);
`;

export default class LinearGraph extends Component<{
  percent: number;
}> {
  render() {
    return (
      <Layout>
        <Progress {...this.props}></Progress>
      </Layout>
    );
  }
}
