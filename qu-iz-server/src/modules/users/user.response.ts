import { UserRankItem } from '@modules/users/user.interface';

namespace UserResponse {
  export interface Get extends ApiResponse {
    nickname: string;
    point: number;
    rank: number;
  }

  export interface Create extends ApiResponse {
    nickname: string;
    point: number;
  }

  export interface Update extends ApiResponse {}

  export interface GetRank extends ApiResponse {
    rank: UserRankItem[];
  }
}

export default UserResponse;
