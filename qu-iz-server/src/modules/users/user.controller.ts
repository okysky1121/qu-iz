import Controller from '@classes/controller.class';

class UserController extends Controller {
  public readonly path: string = '/users';

  protected mount(): void {
    this.mounter.get('/', this.getUser);
    this.mounter.post('/', this.createUser);
  }

  private async getUser(req: TypedRequest, res: TypedResponse): Promise<void> {
    res.send('This action gets user data');
  }

  private async createUser(req: TypedRequest, res: TypedResponse): Promise<void> {
    res.send('This action creates user');
  }
}

export default UserController;
