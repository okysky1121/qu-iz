import Song from '@modules/musics/interface/song.interface';
import GenerateId from '@utils/id.util';
import { model, Schema } from 'mongoose';

const SongSchema = new Schema<Song>({
  id: { type: String, required: true, unique: true, default: () => GenerateId(8) },
  title: { type: String, required: true },
  album_id: { type: String, required: true },
  tags: { type: [String], required: true, default: [] },
  type: { type: Number, required: true },
});

const SongModel = model<Song>('Song', SongSchema);

export default SongModel;
