import { PureComponent } from "react";
import styled from "styled-components";

import edit from "./assets/edit.svg";
import star from "./assets/star.svg";

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f1f8fb;
`;

const Header = styled.div`
  position: fixed;
  width: 414px;
  height: 155px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  border-radius: 0px 0px 32px 32px;
`;

const UserName = styled.span`
  position: absolute;
  width: 147px;
  height: 36px;
  left: 36px;
  top: 36px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #000017;
`;

const NameEdit = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 199px;
  top: 42px;
`;

const UserPoint = styled.span`
  position: absolute;
  width: 165px;
  height: 35px;
  left: 36px;
  top: 88px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;

  color: #4c269a;
`;

const UserRank = styled.span`
  position: absolute;
  width: 32px;
  height: 27px;
  left: 217px;
  top: 92px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #af8cf8;
`;

const ListTitle = styled.span`
  position: absolute;
  width: 34px;
  height: 26px;
  left: 16px;
  top: 175px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;

  color: #acc1d5;
`;

const ListElement = styled.div<{ top: number }>`
  position: absolute;
  width: 382px;
  height: 114px;
  left: 16px;
  top: ${({ top }) => top}px;

  background: #ffffff;
  border-radius: 16px;
`;

const LevelDiff = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 40px;
  top: 237px;
`;

const LevelTitle = styled.span``;

const LevelPoint = styled.span``;

class App extends PureComponent {
  render() {
    return (
      <Background>
        <Header>
          <UserName>안유진~짜예뻐</UserName>
          <NameEdit src={edit} />
          <UserPoint>12, 400 points</UserPoint>
          <UserRank>8 위</UserRank>
        </Header>
        <ListTitle>도전</ListTitle>
        <>
          <ListElement top={214}>
            <LevelDiff src={star} />
          </ListElement>
          <ListElement top={343}></ListElement>
          <ListElement top={473}></ListElement>
          <ListElement top={603}></ListElement>
        </>
      </Background>
    );
  }
}

export default App;
