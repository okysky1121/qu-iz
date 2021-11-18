import { Document } from 'mongoose';

export enum AlbumType {
  KOREAN,
  JAPANESE,
  SOLO,
  SINGLE,
}

interface Album extends Document {
  id: string;
  title: string;
  cover: string;
  type: AlbumType;
}

export default Album;
