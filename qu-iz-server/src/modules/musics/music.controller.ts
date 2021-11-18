import Controller from '@classes/controller.class';
import ValidateGuard from '@guards/validate.guard';
import AddAlbumDto from '@modules/musics/dto/add-album.dto';
import MusicResponse from '@modules/musics/music.response';
import MusicService from '@modules/musics/music.service';
import ServiceProvider from '@providers/service.provider';

class MusicController extends Controller {
  public readonly path: string = '/musics';
  private readonly musicService: MusicService = ServiceProvider.get(MusicService);

  protected mount(): void {
    this.mounter.post('/album', ValidateGuard(AddAlbumDto), this.addAlbum.bind(this));
  }

  private async addAlbum(
    req: TypedRequest<AddAlbumDto>,
    res: TypedResponse<MusicResponse.AddAlbum>
  ): Promise<void> {
    const album = await this.musicService.addAlbum(req.body.title, req.body.cover, req.body.type);
    res.json({ id: album.id, title: album.title, cover: album.cover, type: album.type });
  }
}

export default MusicController;
