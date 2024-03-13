//In this is providing the schema or model  mongodb document

// In this file, you are providing the schema or model for a MongoDB document

import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a unique username"],
    unique: [true, "Username already exists"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide a unique email"],
  },
  firstName: { type: String },
  lastName: { type: String },
  mobile: { type: Number },
  address: { type: String },
  profile: { type: String },
});

export default mongoose.model.Users || mongoose.model('User', UserSchema);