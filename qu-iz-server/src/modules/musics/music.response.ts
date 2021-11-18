import { AlbumType } from '@modules/musics/interface/album.interface';
import { SongType } from '@modules/musics/interface/song.interface';

namespace MusicResponse {
  export interface AddAlbum {
    id: string;
    title: string;
    cover: string;
    type: AlbumType;
  }

  export interface AddSong {
    id: string;
    title: string;
    album_id: string;
    tags: string[];
    type: SongType;
  }
}

export default MusicResponse;
