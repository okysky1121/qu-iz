import HttpException from '@exceptions/http.exception';

class UnprocessableEntityException extends HttpException {
  constructor(message: string) {
    super(422, message);
  }
}

export default UnprocessableEntityException;
