import { NextFunction, Request, Response } from 'express';

function AsyncUtil(route: Route) {
  return function (req: Request, res: Response, next: NextFunction): void {
    route(req, res, next).catch(next);
  };
}

export default AsyncUtil;
