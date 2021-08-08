declare namespace Express {
  interface Request {
    jwt: JwtPayload | null;
    user?: import('@modules/users/user.interface').default;
  }
}

type TypedRequest<P = any, Q = any> = import('express').Request<any, any, P, Q>;
type TypedResponse<P = any> = import('express').Response<P>;
type Route = (
  req: import('express').Request,
  res: import('express').Response,
  next: import('express').NextFunction
) => Promise<any>;
