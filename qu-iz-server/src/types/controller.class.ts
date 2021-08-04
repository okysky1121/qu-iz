import { Router } from 'express';

abstract class Controller {
  public abstract readonly path: string;
  public readonly router: Router = Router();

  constructor() {
    this.mount();
  }

  protected abstract mount(): void;
}

export default Controller;
