import App from './app';

const port = 3000;
const app = new App(port);

app.on('start', port => {
  console.log(`Server started in port ${port}`);
});

app.start();
