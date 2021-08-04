import dotenv from 'dotenv';
import App from './app';

dotenv.config();

const port = parseInt(process.env.PORT!) || 3000;
const app = new App(port);

app.on('start', port => {
  console.log(`Server started in port ${port}`);
});

app.start();
