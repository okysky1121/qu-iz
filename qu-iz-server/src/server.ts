import Controller from '@classes/controller.class';
import MusicController from '@modules/musics/music.controller';
import MusicService from '@modules/musics/music.service';
import UserController from '@modules/users/user.controller';
import UserService from '@modules/users/user.service';
import ServiceProvider from '@providers/service.provider';
import dotenv from 'dotenv';
import App from './app';

dotenv.config();

const port = parseInt(process.env.PORT!) || 3000;

const services = [UserService, MusicService];
ServiceProvider.load(services);

const controllers: Controller[] = [new UserController(), new MusicController()];

const app = new App(port);

app.on('load', () => {
  console.log('Loaded application');
});

app.on('start', port => {
  console.log(`Server started in port ${port}`);
});

app.load(controllers).then(() => app.start());
