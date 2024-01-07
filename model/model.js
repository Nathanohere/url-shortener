import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  urlId: {
    type: String,
    required: true,
  },
  fullUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
  date: {
    type: String,
    default: Date.now(),
  },
});

const urlmodel = mongoose.model('urlmodel', urlSchema);

export default urlmodel;
