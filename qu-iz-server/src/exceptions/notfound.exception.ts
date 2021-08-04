import HttpException from './http.exception';

class NotfoundException extends HttpException {
  constructor() {
    super(404, '요청하신 내용을 찾을 수 없어요.');
  }
}

export default NotfoundException;
