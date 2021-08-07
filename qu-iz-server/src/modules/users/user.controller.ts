import Controller from '@classes/controller.class';
import ServiceProvider from '@providers/service.provider';
import Jwt from '@utils/jwt.util';
import UserResponse from './user.response';
import UserService from './user.service';

class UserController extends Controller {
  public readonly path: string = '/users';
  private userService: UserService = ServiceProvider.get(UserService);

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

    const payload: JwtPayload = { uuid: user.uuid };
    const jwt = Jwt.sign(payload);

    res.json({ ok: true, nickname: user.nickname, point: user.point, jwt });
  }
}

export default UserController;
