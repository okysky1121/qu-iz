import { Component } from 'react';
import styled from 'styled-components';
import icon from '../icons/pencil.svg';

const Layout = styled.div`
  height: 155px;
  width: 100%;
  background-color: white;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 32px;
  box-sizing: border-box;
`;

const Wrap = styled.div`
  * {
    margin-right: 16px;
  }

  * ~ * {
    margin-right: 0;
  }
`;

const Name = styled.span`
  font-weight: 800;
  font-size: 24px;
  color: var(--Dark-Gray);
`;

const Point = styled.span`
  font-weight: bold;
  font-size: 24px;
  color: var(--Purple-Dark);
`;

const Rank = styled.span`
  font-weight: 800;
  font-size: 18px;
  color: var(--Purple);
`;

function rest(num: number) {
  const str = num.toString().split('').reverse(),
    arr = [];

  if (str.length <= 3) return str.reverse().join('');

  for (let i = 0; i < str.length; i++) {
    if (i % 3 === 0) arr.push(',');
    arr.push(str[i]);
  }

  return arr.reverse().join('').slice(0, -1);
}

export default class Profile extends Component<{
  name: string;
  point: number;
  rank: number;
}> {
  render() {
    return (
      <Layout>
        <Wrap>
          <Name>{this.props.name}</Name>
          <img src={icon} alt="edit" />
        </Wrap>
        <Wrap>
          <Point>{rest(this.props.point)} points</Point>
          <Rank>{this.props.rank} 위</Rank>
        </Wrap>
      </Layout>
    );
  }
}
