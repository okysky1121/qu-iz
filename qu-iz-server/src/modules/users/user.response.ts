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
}

export default UserResponse;
