import Album, { AlbumType } from '@modules/musics/interface/album.interface';
import AlbumModel from '@modules/musics/model/album.model';
import Service from '@services/base.service';

class MusicService extends Service {
  public async addAlbum(title: string, cover: string, type: AlbumType): Promise<Album> {
    const album = new AlbumModel({ title, cover, type });
    await album.save();
    return album;
  }
}

export default MusicService;
