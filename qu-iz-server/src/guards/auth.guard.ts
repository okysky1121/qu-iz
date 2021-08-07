import UnauthorizedException from '@exceptions/unauthorized.exception';
import UserService from '@modules/users/user.service';
import ServiceProvider from '@providers/service.provider';
import { NextFunction } from 'express';

async function AuthGuard(req: TypedRequest, res: TypedResponse, next: NextFunction): Promise<void> {
  if (!req.jwt) return next(new UnauthorizedException());

  const userService: UserService = ServiceProvider.get(UserService);
  const user = await userService.get(req.jwt.uuid);

  if (!user) return next(new UnauthorizedException());
  next();
}

export default AuthGuard;
