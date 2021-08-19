import { Document } from 'mongoose';

interface User extends Document {
  uuid: string;
  nickname: string;
  point: number;
  getRank(): Promise<number>;
  getToken(): Promise<string>;
}

export default User;
