import { Document } from 'mongoose';

enum SongType {
  TITLE,
  SUBTITLE,
  BSIDE,
  JAPANESE,
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
