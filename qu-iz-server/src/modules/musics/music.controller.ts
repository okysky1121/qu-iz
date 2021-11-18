import Controller from '@classes/controller.class';
import UnauthorizedException from '@exceptions/unauthorized.exception';
import ValidateGuard from '@guards/validate.guard';
import AddAlbumDto from '@modules/musics/dto/add-album.dto';
import AddSongDto from '@modules/musics/dto/add-song.dto';
import MusicResponse from '@modules/musics/music.response';
import MusicService from '@modules/musics/music.service';
import ServiceProvider from '@providers/service.provider';

class MusicController extends Controller {
  public readonly path: string = '/musics';
  private readonly musicService: MusicService = ServiceProvider.get(MusicService);

  protected mount(): void {
    this.mounter.post('/album', ValidateGuard(AddAlbumDto), this.addAlbum.bind(this));
    this.mounter.post('/song', ValidateGuard(AddSongDto), this.addSong.bind(this));
  }

  private async addAlbum(
    req: TypedRequest<AddAlbumDto>,
    res: TypedResponse<MusicResponse.AddAlbum>
  ): Promise<void> {
    if (req.body.key !== process.env.JWT_KEY) {
      throw new UnauthorizedException();
    }

    const album = await this.musicService.addAlbum(req.body.title, req.body.cover, req.body.type);
    res.json({ id: album.id, title: album.title, cover: album.cover, type: album.type });
  }

  private async addSong(
    req: TypedRequest<AddSongDto>,
    res: TypedResponse<MusicResponse.AddSong>
  ): Promise<void> {
    if (req.body.key !== process.env.JWT_KEY) {
      throw new UnauthorizedException();
    }

    const song = await this.musicService.addSong(
      req.body.title,
      req.body.data_id,
      req.body.album_id,
      req.body.tags,
      req.body.type
    );
    res.json({
      id: song.id,
      title: song.title,
      album_id: song.albumId,
      tags: song.tags,
      type: song.type,
    });
  }
}

export default MusicController;
