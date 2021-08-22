import IsNotBlank from '@decorators/notblank.decorator';
import { IsString, MaxLength } from 'class-validator';

class UpdateDto {
  @IsString({ message: '닉네임을 입력해주세요' })
  @IsNotBlank({ message: '닉네임을 입력해주세요' })
  @MaxLength(12, { message: '닉네임은 12자 이내로 입력해주세요' })
  public nickname!: string;
}

export default UpdateDto;
