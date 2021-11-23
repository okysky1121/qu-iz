import { Component } from 'react';
import styled from 'styled-components';
import star from '../icons/diff_star.svg';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.span`
  font-weight: 800;
  font-size: 18px;
  color: var(--Purple-Dark);
`;

const Star = styled.div`
  padding: 12px 16px;
  border-radius: 48px;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 12px;

  img ~ img {
    margin-left: 12px;
  }
`;

export default class LevelIndicator extends Component<{ level: number }> {
  render() {
    return (
      <Layout>
        <Text>난이도</Text>
        <Star>
          {new Array(this.props.level).fill(0).map((_, i) => (
            <img src={star} alt="level" key={i} />
          ))}
        </Star>
      </Layout>
    );
  }
}
