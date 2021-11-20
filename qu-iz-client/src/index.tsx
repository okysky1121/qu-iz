import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

const meta = document.querySelector('meta[name=viewport');

meta?.setAttribute(
  'content',
  meta
    ?.getAttribute('content')!
    .replace('device-height', `${window.innerHeight}`)
);
