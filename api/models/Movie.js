import mongoose from 'mongoose';

const torrentSchema = new mongoose.Schema({
  url: String, // yifi
  magnet: String, // eztv
  title: String, // eztv
  hash: String, // for key
  quality: String,
  size: String,
  seeds: Number,
  peers: Number,
  source: String, // yifi or eztv
});

const movieSchema = new mongoose.Schema({
  idImdb: { type: String, unique: true },
  torrents: [
    torrentSchema
  ],
  title: {
    en: String,
    fr: String,
  },
  year: Number,
  overview: {
    en: String,
    fr: String,
  },
  genres: [{
    en: String,
    fr: String,
  }],
  runtime: Number,
  director: String,
  cast: {
    en: String,
    fr: String,
  },
  rating: Number,
  posterLarge: String,
  thumb: String,
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;
