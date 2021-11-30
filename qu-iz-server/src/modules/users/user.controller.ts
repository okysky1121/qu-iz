import Controller from '@classes/controller.class';
import { InvalidRequestMessage } from '@constants';
import UnprocessableEntityException from '@exceptions/unprocessable-entity.exception';
import AuthGuard from '@guards/auth.guard';
import ValidateGuard from '@guards/validate.guard';
import {
  PaginatedUserRankDto,
  PaginatedUserRankParamDto,
} from '@modules/users/dto/paginated-user-rank.dto';
import ServiceProvider from '@providers/service.provider';
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
    this.mounter.get('/rank', AuthGuard, this.getUserRank.bind(this));
    this.mounter.get(
      '/rank/:page',
      AuthGuard,
      ValidateGuard(PaginatedUserRankDto, 'query'),
      ValidateGuard(PaginatedUserRankParamDto, 'param'),
      this.getPaginatedUserRank.bind(this)
    );
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
    const token = await user.getToken();

    res.json({ ok: true, nickname: user.nickname, point: user.point, token });
  }

  private async updateUser(
    req: TypedRequest<UpdateDto>,
    res: TypedResponse<UserResponse.Update>
  ): Promise<void> {
    const user = req.user!;
    await this.userService.update(user, req.body.nickname);

    res.json({ ok: true });
  }

  private async getUserRank(
    req: TypedRequest,
    res: TypedResponse<UserResponse.GetRank>
  ): Promise<void> {
    const user = req.user!;
    const rank = await this.userService.getRank(user);

    res.json({ ok: true, rank });
  }

  private async getPaginatedUserRank(
    req: TypedRequest<any, PaginatedUserRankDto, PaginatedUserRankParamDto>,
    res: TypedResponse
  ): Promise<void> {
    const limitValue = req.query.limit;
    const limit = parseInt(limitValue);
    if (limit < 1 || limit > 100)
      throw new UnprocessableEntityException(`${InvalidRequestMessage}\n(Invalid limit range)`);

    const pageValue = req.params.page;
    const page = parseInt(pageValue);
    if (page < 1)
      throw new UnprocessableEntityException(`${InvalidRequestMessage}\n(Invalid page range)`);

    const user = req.user!;
    res.json(true);
  }
}

export default UserController;
