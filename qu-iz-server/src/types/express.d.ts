declare namespace Express {
  interface Request {
    jwt: JwtPayload | null;
    user?: import('@modules/users/user.interface').default;
  }
}

type TypedRequest<P = any, Q = any, R = any> = import('express').Request<R, any, P, Q>;
type TypedResponse<P = any> = import('express').Response<P>;
type Route = (
  req: TypedRequest,
  res: TypedResponse,
  next: import('express').NextFunction
) => Promise<any>;
