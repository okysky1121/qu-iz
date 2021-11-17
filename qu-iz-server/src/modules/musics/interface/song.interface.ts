import { Document } from 'mongoose';

enum SongType {
  KOREAN_TITLE,
  KOREAN_DEFAULT,
  JAPANESE_TITLE,
  JAPANESE_DEFAULT,
  SOLO_TITLE,
  SOLO_DEFAULT,
  SINGLE_KOREAN,
  SINGLE_JAPANESE,
  SINGLE_ENGLISH
}

interface Song extends Document {
  uuid: string;
  title: string;
  album_uuid: string;
  tags: string[];
  type: SongType;
}

export { SongType };
export default Song;
