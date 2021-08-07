import Service from '@services/base.service';
import User from './user.interface';
import UserModel from './user.model';

class UserService extends Service {
  public async get(uuid: string): Promise<User | null> {
    const user = await UserModel.findOne({ uuid });
    return user || null;
  }

  public async create(): Promise<User> {
    const randomId = (Math.random() * 10000) | 0;
    const nickname = `WIZ-${randomId}`;

    const user = new UserModel({ nickname });
    await user.save();

    return user;
  }
}

export default UserService;
