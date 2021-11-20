import { Component } from 'react';
import styled from 'styled-components';
import note from '../icons/note.svg';
import CircleGraph from './CircleGraph';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
  }
`;

export default class MusicIndicator extends Component<{ percent: number }> {
  render() {
    return (
      <Layout>
        <CircleGraph {...this.props} />
        <img src={note} alt="note" />
      </Layout>
    );
  }
}
