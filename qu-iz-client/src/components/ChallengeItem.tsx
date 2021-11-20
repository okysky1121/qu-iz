import { Component } from 'react';
import styled from 'styled-components';
import Challenge from '../types/Challenge';
import star from '../icons/star.svg';

const Layout = styled.div`
  height: 114px;
  width: 100%;
  border-radius: 16px;
  background-color: white;

  position: relative;
  margin-top: 16px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 24px;
`;

const Levels = styled.div`
  display: flex;

  img ~ img {
    margin-left: 10px;
  }
`;

const Point = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: var(--Gray);

  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 26px;
`;

const Title = styled.span`
  font-weight: 800;
  font-size: 18px;
  color: var(--Dark-Gray);

  margin-top: 15px;
`;

export default class ChallengeItem extends Component<Challenge> {
  render() {
    return (
      <Layout>
        <Wrap>
          <Levels>
            {Array(this.props.level)
              .fill(0)
              .map((_, i) => (
                <img src={star} alt="level" key={i} />
              ))}
          </Levels>
          <Title>{this.props.title}</Title>
        </Wrap>
        <Point>{this.props.point} points</Point>
      </Layout>
    );
  }
}
