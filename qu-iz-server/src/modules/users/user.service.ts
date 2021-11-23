import Service from '@services/base.service';
import User, { UserRankItem } from './user.interface';
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

  public async getRank(user: User): Promise<UserRankItem[]> {
    const users: User[] = await UserModel.find().sort({ point: -1 }).limit(5);
    const result: UserRankItem[] = [];

    let meExists: boolean = false;
    for (const item of users) {
      const isMe = item.id === user.id;
      if (isMe) meExists = true;

      const rankItem: UserRankItem = {
        me: isMe,
        nickname: item.nickname,
        rank: await item.getRank(),
      };
      result.push(rankItem);
    }

    if (!meExists) {
      result.pop();
      const myRankItem: UserRankItem = {
        me: true,
        nickname: user.nickname,
        rank: await user.getRank(),
      };
      result.push(myRankItem);
    }

    return result;
  }
}

export default UserService;
