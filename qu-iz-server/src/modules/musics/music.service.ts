import NotfoundException from '@exceptions/notfound.exception';
import Album, { AlbumType } from '@modules/musics/interface/album.interface';
import Song, { SongType } from '@modules/musics/interface/song.interface';
import AlbumModel from '@modules/musics/model/album.model';
import SongModel from '@modules/musics/model/song.model';
import Service from '@services/base.service';

class MusicService extends Service {
  public async addAlbum(title: string, cover: string, type: AlbumType): Promise<Album> {
    const album = new AlbumModel({ title, cover, type });
    await album.save();
    return album;
  }

  public async addSong(
    title: string,
    dataId: string,
    albumId: string,
    tags: string[],
    type: SongType
  ): Promise<Song> {
    const album = await AlbumModel.findOne({ id: albumId });
    if (!album) throw new NotfoundException('존재하지 않는 앨범 id 이에요');

    const song = new SongModel({ title, dataId, albumId, tags, type });
    await song.save();
    return song;
  }
}

export default MusicService;
