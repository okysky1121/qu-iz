import { InvalidRequestMessage } from '@constants';
import { IsNumberString } from 'class-validator';

export class PaginatedUserRankDto {
  @IsNumberString({}, { message: `${InvalidRequestMessage}\n(Invalid limit value)` })
  public limit!: string;
}

export class PaginatedUserRankParamDto {
  @IsNumberString({}, { message: `${InvalidRequestMessage}\n(Invalid page value)` })
  public page!: string;
}
