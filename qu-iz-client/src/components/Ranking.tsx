import { Component } from 'react';
import styled from 'styled-components';

type User = { nickname: string; rank: number };

const Layout = styled.div`
  width: 100vw;
  padding: 16px;
  box-sizing: border-box;
  margin-bottom: 16px;
`;

const Title = styled.span`
  font-weight: 800;
  font-size: 18px;
  color: var(--Gray);
`;

const List = styled.div`
  width: 100%;
  border-radius: 16px;
  background-color: white;

  padding: 24px;
  box-sizing: border-box;
  margin-top: 16px;

  * ~ * {
    margin-top: 20px;
  }
`;

const Rank = styled.span`
  font-weight: normal;
  font-size: 18px;
  color: var(--Orange);
`;

const Name = styled.span`
  font-weight: normal;
  font-size: 18px;
  color: var(--Dark-Gray);

  margin-left: 16px;
`;

const Me = styled(Name)`
  font-weight: 800;
`;

const AllSee = styled.div`
  font-weight: 800;
  font-size: 14px;
  color: var(--Purple-Dark);

  display: flex;
  justify-content: center;
`;

export default class Ranking extends Component<{
  list: User[];
  me: User;
}> {
  render() {
    return (
      <Layout>
        <Title>순위</Title>
        <List>
          {this.props.list.map((e, i) => (
            <div key={i}>
              <Rank>{e.rank}</Rank>
              <Name>{e.nickname}</Name>
            </div>
          ))}
          <div>
            <Rank>{this.props.me.rank}</Rank>
            <Me>{this.props.me.nickname}</Me>
          </div>
          <AllSee>모두보기</AllSee>
        </List>
      </Layout>
    );
  }
}
