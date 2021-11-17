import { Document } from 'mongoose';

enum AlbumType {
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
