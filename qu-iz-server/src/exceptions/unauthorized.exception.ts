import HttpException from '@exceptions/http.exception';

class UnauthorizedException extends HttpException {
  constructor() {
    super(401, '접근이 거부되었어요\n나중에 다시 시도해주세요');
  }
}

export default UnauthorizedException;
