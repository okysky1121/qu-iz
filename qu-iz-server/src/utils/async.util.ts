import { NextFunction, Request, Response } from 'express';

function AsyncUtil(routes: Route[]) {
  const handlers = [];

  for (const route of routes) {
    const handler = function (req: Request, res: Response, next: NextFunction): void {
      route(req, res, next).catch(next);
    };
    handlers.push(handler);
  }

  return handlers;
}

export default AsyncUtil;
