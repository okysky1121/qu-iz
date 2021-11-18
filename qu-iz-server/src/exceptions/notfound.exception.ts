import HttpException from '@exceptions/http.exception';

class NotfoundException extends HttpException {
  constructor(message: string = '요청하신 내용을 찾을 수 없어요') {
    super(404, message);
  }
}

export default NotfoundException;
