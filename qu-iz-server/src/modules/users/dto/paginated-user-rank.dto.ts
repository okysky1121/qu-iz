import { InvalidRequestMessage } from '@constants';
import { IsNumberString } from 'class-validator';

class PaginatedUserRankDto {
  @IsNumberString({}, { message: `${InvalidRequestMessage}\n(Invalid limit value)` })
  public limit!: string;
}

export default PaginatedUserRankDto;
