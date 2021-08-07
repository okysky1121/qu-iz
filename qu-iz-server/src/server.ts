import Controller from '@classes/controller.class';
import UserController from '@modules/users/user.controller';
import UserService from '@modules/users/user.service';
import ServiceProvider from '@providers/service.provider';
import dotenv from 'dotenv';
import App from './app';

dotenv.config();

const port = parseInt(process.env.PORT!) || 3000;

const services = [UserService];
ServiceProvider.load(services);

const controllers: Controller[] = [new UserController()];

const app = new App(port);

app.on('load', () => {
  console.log('Loaded application');
});

app.on('start', port => {
  console.log(`Server started in port ${port}`);
});

app.load(controllers).then(() => app.start());
