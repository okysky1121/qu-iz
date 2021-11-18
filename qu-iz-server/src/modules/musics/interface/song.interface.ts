import { Document } from 'mongoose';

export enum SongType {
  KOREAN_TITLE,
  KOREAN_DEFAULT,
  JAPANESE_TITLE,
  JAPANESE_DEFAULT,
  SOLO_TITLE,
  SOLO_DEFAULT,
  SINGLE_KOREAN,
  SINGLE_JAPANESE,
  SINGLE_ENGLISH,
}

interface Song extends Document {
  id: string;
  title: string;
  album_id: string;
  tags: string[];
  type: SongType;
}

export default Song;
