import EventEmitter from 'events';
import express, { Application } from 'express';

declare interface App {
  on(event: 'start', listener: (port: number) => void): this;
}

class App extends EventEmitter {
  private readonly port: number;
  private readonly application: Application;

  constructor(port: number) {
    super();
    this.port = port;
    this.application = express();
  }

  public start(): void {
    this.application.listen(this.port);
    this.emit('start', this.port);
  }
}

export default App;
