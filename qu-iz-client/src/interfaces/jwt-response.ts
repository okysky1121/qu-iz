import Response from './response';

interface JWTResponse extends Response {
  jwt: string;
}

export default JWTResponse;
