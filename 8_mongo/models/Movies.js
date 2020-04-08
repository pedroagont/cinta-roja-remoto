const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    enum: ['action', 'drama', 'comedy', 'horror', 'documental'],
    required: true,
  },
  actors: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    default: "Descripción general...",
  },
});

const Movies = mongoose.model('Movies', movieSchema);

module.exports = Movies;
