import Jwt from '@utils/jwt.util';
import GenerateUUID from '@utils/uuid.util';
import { model, Schema } from 'mongoose';
import User from './user.interface';

const UserSchema = new Schema<User>({
  uuid: { type: String, required: true, unique: true, default: () => GenerateUUID(8) },
  nickname: { type: String, required: true },
  point: { type: Number, required: true, default: 0 },
});

UserSchema.methods.getRank = async function (this: User): Promise<number> {
  return 1;
};

UserSchema.methods.getToken = async function (this: User): Promise<string> {
  const payload: JwtPayload = { uuid: this.uuid };
  const jwt = Jwt.sign(payload);
  return jwt;
};

const UserModel = model<User>('User', UserSchema);

export default UserModel;
