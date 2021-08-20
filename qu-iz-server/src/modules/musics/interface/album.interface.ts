import { Document } from 'mongoose';

interface Album extends Document {
  uuid: string;
  title: string;
  cover: string;
}

export default Album;
