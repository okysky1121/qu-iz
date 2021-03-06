import HttpException from '@exceptions/http.exception';
import NotfoundException from '@exceptions/notfound.exception';
import { Application, NextFunction } from 'express';

interface ExceptionResponse extends ApiResponse {
  message: string;
}

class ExceptionFilter {
  public static use(application: Application): void {
    application.use(() => {
      throw new NotfoundException();
    });

    application.use(
      (
        err: Error,
        req: TypedRequest,
        res: TypedResponse<ExceptionResponse>,
        next: NextFunction
      ) => {
        if (err instanceof HttpException) {
          res.status(err.status);
          res.json({ ok: false, message: err.message });
          return true;
        }

        console.error(err.name, err.message, err.stack);
        res.json({ ok: false, message: '서버 내부 오류입니다\n나중에 다시 시도해주세요' });
        return true;
      }
    );
  }
}

export default ExceptionFilter;
