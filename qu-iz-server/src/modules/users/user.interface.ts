import { Document } from 'mongoose';

interface User extends Document {
  uuid: string;
  nickname: string;
  point: number;
}

export default User;
