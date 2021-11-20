import { Component } from 'react';
import styled from 'styled-components';
import glass from '../icons/glass.svg';

const Layout = styled.div`
  height: 46px;
  width: 81.3%;
  border-radius: 16px;
  background-color: var(--Background);

  display: flex;
  align-items: center;

  margin-top: 36px;

  img {
    margin-left: 18px;
  }
`;

const Input = styled.input`
  font-size: 14px;
  color: var(--Gray);

  border: none;
  outline: none;

  width: calc(100% - 62px);
  background-color: transparent;

  margin-left: 10px;

  ::placeholder {
    font-size: 14px;
    color: var(--Gray);
  }
`;

export default class SearchBar extends Component {
  render() {
    return (
      <Layout>
        <img src={glass} alt="glass" />
        <Input placeholder="노래 제목으로 검색" />
      </Layout>
    );
  }
}
