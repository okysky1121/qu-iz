import { AlbumType } from '@modules/musics/interface/album.interface';
import { IsNumber, IsString, IsUrl } from 'class-validator';

class AddAlbumDto {
  @IsString({ message: '앨범 제목을 입력해주세요' })
  public title!: string;

  @IsString({ message: '앨범 커버 url 을 입력해주세요' })
  @IsUrl({}, { message: '올바른 url 주소를 입력해 주세요' })
  public cover!: string;

  @IsNumber({}, { message: '앨범 유형을 입력해주세요' })
  public type!: AlbumType;
}

export default AddAlbumDto;
