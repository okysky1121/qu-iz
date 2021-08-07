import ServiceProvider from '@providers/service.provider';
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

  public load(): void {
    for (const key in this) {
      if (this[key] instanceof Function) {
        //@ts-ignore
        this[key] = ServiceProvider.get(this[key]);
      }
    }
  }

  protected abstract mount(): void;
}

export default Controller;
