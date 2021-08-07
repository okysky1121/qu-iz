import Controller from '@classes/controller.class';
import UserController from '@modules/users/user.controller';
import UserService from '@modules/users/user.service';
import dotenv from 'dotenv';
import App from './app';

dotenv.config();

const port = parseInt(process.env.PORT!) || 3000;
const services = [UserService];
const controllers: Controller[] = [new UserController()];

const app = new App(port);

app.on('load', () => {
  console.log('Loaded application');
});

app.on('start', port => {
  console.log(`Server started in port ${port}`);
});

app.load(services, controllers).then(() => app.start());
