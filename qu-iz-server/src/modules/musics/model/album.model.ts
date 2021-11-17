import Album from '@modules/musics/interface/album.interface';
import GenerateId from '@utils/id.util';
import { model, Schema } from 'mongoose';

const AlbumSchema = new Schema<Album>({
  id: { type: String, required: true, unique: true, default: () => GenerateId(8) },
  title: { type: String, required: true },
  cover: { type: String, required: true },
  type: { type: Number, required: true },
});

const AlbumModel = model<Album>('Album', AlbumSchema);

export default AlbumModel;
