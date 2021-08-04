import { Router } from 'express';

abstract class Controller {
  public abstract path: string;
  public router: Router = Router();

  constructor() {
    this.mount();
  }

  protected abstract mount(): void;
}

export default Controller;
