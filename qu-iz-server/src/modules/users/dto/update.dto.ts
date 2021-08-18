import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

class UpdateDto {
  @IsString({ message: '닉네임을 입력해주세요' })
  @IsNotEmpty({ message: '닉네임을 입력해주세요' })
  @MinLength(1, { message: '닉네임을 입력해주세요' })
  @MaxLength(12, { message: '닉네임은 12자 이내로 입력해주세요' })
  public nickname!: string;
}

export default UpdateDto;
