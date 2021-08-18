import { Component } from 'react';
import styled from 'styled-components';
import QuestionBar from '../components/solve/question-bar';

const Layout = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

class SolveChallengePage extends Component {
  render() {
    return (
      <Layout>
        <QuestionBar max={10} />
      </Layout>
    );
  }
}

export default SolveChallengePage;
