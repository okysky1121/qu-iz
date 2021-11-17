import Service from '@services/base.service';
import User from './user.interface';
import UserModel from './user.model';

class UserService extends Service {
  public async get(id: string): Promise<User | null> {
    const user = await UserModel.findOne({ id });
    return user || null;
  }

  public async create(): Promise<User> {
    const randomId = (Math.random() * 10000) | 0;
    const nickname = `WIZ-${randomId}`;

    const user = new UserModel({ nickname });
    await user.save();

    return user;
  }

  public async update(user: User, nickname: string): Promise<User> {
    user.nickname = nickname;
    await user.save();
    return user;
  }
}

export default UserService;
