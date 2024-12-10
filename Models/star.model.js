import mongoose from "mongoose";

const starSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  celebrityName: {
    type: String,
    required: [true, "Celebrity Name is required"]
  },
  about: {
    type: String,
    required: [true, "About field is required"]
  },
  images: [{ type: String }],
  createdAt: { type: Date, default: Date.now() }
})

export default mongoose.model('Star', starSchema);
