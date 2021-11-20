import { Component } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  height: 206px;
  width: 206px;
  transform: rotate(-90deg);
`;

export default class CircleGraph extends Component<{ percent: number }> {
  ctx!: CanvasRenderingContext2D;
  private _ref = (ref: HTMLCanvasElement | null) => {
    if (ref === null) return;

    ref.height = 206;
    ref.width = 206;
    this.ctx = ref.getContext('2d')!;
    requestAnimationFrame(this.animate);
  };

  private animate = () => {
    this.ctx.clearRect(0, 0, 206, 206);
    this.ctx.lineWidth = 5;
    this.ctx.lineCap = 'round';

    this.ctx.beginPath();
    this.ctx.arc(103, 103, 98, 0, 2 * Math.PI);
    this.ctx.strokeStyle = '#ece3ff';
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.arc(103, 103, 98, 0, 2 * Math.PI * (this.props.percent / 100));
    this.ctx.strokeStyle = '#af8cf8';
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.arc(103, 103, 78, 0, 2 * Math.PI);
    this.ctx.fillStyle = '#fff';
    this.ctx.fill();
  };

  render() {
    return <Canvas ref={this._ref}></Canvas>;
  }
}
