import UnauthorizedException from '@exceptions/unauthorized.exception';
import { NextFunction } from 'express';

async function AuthGuard(req: TypedRequest, res: TypedResponse, next: NextFunction): Promise<void> {
  if (!req.jwt) next(new UnauthorizedException());
}

export default AuthGuard;
