import { Document } from 'mongoose';

enum AlbumType {
  KOREAN, JAPANESE, SOLO, SINGLE
}

interface Album extends Document {
  uuid: string;
  title: string;
  cover: string;
}

export default Album;
