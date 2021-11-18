import { IsArray, IsNumber, IsString } from 'class-validator';

class AddSongDto {
  @IsString({ message: '인증 키를 입력해주세요' })
  public key!: string;

  @IsString({ message: '제목을 입력해주세요' })
  public title!: string;

  @IsString({ message: '데이터 id 를 입력해주세요' })
  public data_id!: string;

  @IsString({ message: '앨범 id 를 입력해주세요' })
  public album_id!: string;

  @IsArray({ message: '태그를 입력해주세요' })
  public tags!: string[];

  @IsNumber({}, { message: '노래 유형을 입력해주세요' })
  public type!: number;
}

export default AddSongDto;
