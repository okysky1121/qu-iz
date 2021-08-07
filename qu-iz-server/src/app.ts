import Controller from '@classes/controller.class';
import ExceptionFilter from '@filters/exception.filter';
import JwtPipe from '@pipes/jwt.pipe';
import EventEmitter from 'events';
import express, { Application } from 'express';
import mongoose from 'mongoose';

declare interface App {
  on(event: 'load', listener: () => void): this;
  on(event: 'start', listener: (port: number) => void): this;
}

class App extends EventEmitter {
  private loaded: boolean = false;
  private readonly port: number;
  private readonly application: Application = express();

  constructor(port: number) {
    super();
    this.port = port;
  }

  private loadPipes(): void {
    JwtPipe.use(this.application);
  }

  private loadControllers(controllers: Controller[]): void {
    for (const controller of controllers) {
      this.application.use(controller.path, controller.router);
    }
  }

  private loadFilters(): void {
    ExceptionFilter.use(this.application);
  }

  private async loadDatabase(): Promise<void> {
    mongoose.connect(process.env.DB_PATH!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  }

  public async load(controllers: Controller[]): Promise<void> {
    this.loadPipes();
    this.loadControllers(controllers);
    this.loadFilters();
    await this.loadDatabase();
    this.loaded = true;
    this.emit('load');
  }

  public start(): void {
    if (!this.loaded) {
      throw new Error('Application tried to start before loading');
    }

    this.application.listen(this.port);
    this.emit('start', this.port);
  }
}

export default App;
