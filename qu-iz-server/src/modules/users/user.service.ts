import User from './user.interface';
import UserModel from './user.model';

class UserService {
  public async create(): Promise<User> {
    const randomId = (Math.random() * 10000) | 0;
    const nickname = `WIZ-${randomId}`;

    const user = new UserModel({ nickname });
    await user.save();

    return user;
  }
}

export default UserService;
