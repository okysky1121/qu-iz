import { Component } from 'react';
import styled from 'styled-components';
import Challenge from '../types/Challenge';
import ChallengeItem from './ChallengeItem';

const Layout = styled.div`
  width: 100vw;
  padding: 16px;
  box-sizing: border-box;
`;

const Title = styled.span`
  font-weight: 800;
  font-size: 18px;
  color: var(--Gray);

  margin-bottom: 16px;
`;

export default class ChallengeList extends Component<{ list: Challenge[] }> {
  render() {
    return (
      <Layout>
        <Title>도전</Title>
        <div>
          {this.props.list.map((e, i) => (
            <ChallengeItem {...e} key={i} />
          ))}
        </div>
      </Layout>
    );
  }
}
