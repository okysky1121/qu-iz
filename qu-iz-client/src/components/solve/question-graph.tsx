import { Component } from 'react';
import styled from 'styled-components';

const Base = styled.div`
  position: absolute;
  width: 204px;
  height: 6px;
  left: 0px;
  top: 37px;
  border-radius: 43px;
`;

const Layout = styled.div`
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 10px 0px;
`;

const Back = styled(Base)<{ bg: string }>`
  background-color: ${({ bg }) => bg};
`;

const Front = styled(Base)<{ color: string; w: number }>`
  width: ${({ w }) => w}%;
  background-color: ${({ color }) => color};
`;

class QuestionGraph extends Component<{
  bg: string;
  color: string;
  max: number;
  current: number;
}> {
  render() {
    return (
      <Layout>
        <Back bg={this.props.bg} />
        <Front
          color={this.props.color}
          w={(this.props.current / this.props.max) * 100}
        />
      </Layout>
    );
  }
}

export default QuestionGraph;
