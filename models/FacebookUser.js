const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectID = Schema.ObjectId;

const userSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  followArtists: [
    {
      type: ObjectID,
      ref: 'Artist'
    }
  ]
});

mongoose.model('FacebookUsers', userSchema);
