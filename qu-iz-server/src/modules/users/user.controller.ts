import Controller from '@classes/controller.class';
import AuthGuard from '@guards/auth.guard';
import ValidateGuard from '@guards/validate.guard';
import ServiceProvider from '@providers/service.provider';
import Jwt from '@utils/jwt.util';
import UpdateDto from './dto/update.dto';
import UserResponse from './user.response';
import UserService from './user.service';

class UserController extends Controller {
  public readonly path: string = '/users';
  private userService: UserService = ServiceProvider.get(UserService);

  protected mount(): void {
    this.mounter.get('/', AuthGuard, this.getUser.bind(this));
    this.mounter.post('/', this.createUser.bind(this));
    this.mounter.put('/', AuthGuard, ValidateGuard(UpdateDto), this.updateUser.bind(this));
  }

  private async getUser(req: TypedRequest, res: TypedResponse<UserResponse.Get>): Promise<void> {
    const user = req.user!;
    const rank = await user.getRank();
    res.json({ ok: true, nickname: user.nickname, point: user.point, rank });
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

  private async updateUser(req: TypedRequest<UpdateDto>, res: TypedResponse): Promise<void> {
    const user = req.user!;
    const updated = await this.userService.update(user, req.body.nickname);

    const payload: JwtPayload = { uuid: updated.uuid };
    const jwt = Jwt.sign(payload);
    res.json({ ok: true, jwt });
  }
}

export default UserController;
