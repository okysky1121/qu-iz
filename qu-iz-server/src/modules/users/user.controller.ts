import { Request, Response } from 'express';
import Controller from '../../types/controller.class';

class UserController extends Controller {
  public readonly path: string = '/users';

  protected mount(): void {
    this.router.get('/', this.getUser);
    this.router.post('/', this.createUser);
  }

  private getUser(req: Request, res: Response): void {
    res.send('This action gets user data');
  }

  private createUser(req: Request, res: Response): void {
    res.send('This action creates user');
  }
}

export default UserController;
