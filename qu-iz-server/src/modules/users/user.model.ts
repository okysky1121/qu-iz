import GenerateUUID from '@utils/uuid.util';
import { model, Schema } from 'mongoose';
import User from './user.interface';

const UserSchema = new Schema<User>({
  uuid: { type: String, required: true, unique: true, default: () => GenerateUUID(8) },
  nickname: { type: String, required: true, unique: true },
  point: { type: Number, required: true, default: 0 },
});

const UserModel = model<User>('User', UserSchema);
export default UserModel;
