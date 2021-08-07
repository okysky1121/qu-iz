import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const key: string = process.env.JWT_KEY!;

class Jwt {
  public static sign(payload: any): string {
    return jwt.sign(payload, key);
  }
}

export default Jwt;
