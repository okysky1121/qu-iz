import dotenv from 'dotenv';
import { IncomingHttpHeaders } from 'http';
import jwt from 'jsonwebtoken';

dotenv.config();

const key: string = process.env.JWT_KEY!;

class Jwt {
  public static get(header: IncomingHttpHeaders): JwtPayload | null {
    const authorization = header.authorization;
    if (!authorization) return null;

    const type = authorization.split(' ')[0];
    const value = authorization.split(' ').slice(1).join(' ');

    if (type !== 'Bearer') return null;

    try {
      const payload = jwt.verify(value, key) as JwtPayload;
      return payload;
    } catch (e) {
      return null;
    }
  }

  public static sign(payload: any): string {
    return jwt.sign(payload, key);
  }
}

export default Jwt;
