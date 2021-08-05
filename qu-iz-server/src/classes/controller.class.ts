import AsyncUtil from '@utils/async.util';
import { Router } from 'express';

class ControllerMounter {
  private readonly router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  public get(path: string, handler: Route): void {
    this.router.get(path, AsyncUtil(handler));
  }

  public post(path: string, handler: Route): void {
    this.router.post(path, AsyncUtil(handler));
  }
}

abstract class Controller {
  public abstract readonly path: string;
  protected readonly mounter: ControllerMounter;
  public readonly router: Router = Router();

  constructor() {
    this.mounter = new ControllerMounter(this.router);
    this.mount();
  }

  protected abstract mount(): void;
}

export default Controller;
