import Jwt from '@utils/jwt.util';
import { Application, NextFunction } from 'express';

class JwtPipe {
  public static use(application: Application): void {
    application.use((req: TypedRequest, res: TypedResponse, next: NextFunction) => {
      req.jwt = Jwt.get(req.headers);
      next();
    });
  }
}

export default JwtPipe;
