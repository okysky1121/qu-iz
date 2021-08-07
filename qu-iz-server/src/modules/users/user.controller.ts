import Controller from '@classes/controller.class';
import UserResponse from './user.response';
import UserService from './user.service';

class UserController extends Controller {
  public readonly path: string = '/users';
  private readonly userService: UserService = new UserService();

  protected mount(): void {
    this.mounter.get('/', this.getUser.bind(this));
    this.mounter.post('/', this.createUser.bind(this));
  }

  private async getUser(req: TypedRequest, res: TypedResponse): Promise<void> {
    res.send('This action gets user data');
  }

  private async createUser(
    req: TypedRequest,
    res: TypedResponse<UserResponse.Create>
  ): Promise<void> {
    const user = await this.userService.create();
    res.json({ ok: true, nickname: user.nickname, point: user.point });
  }
}

export default UserController;
