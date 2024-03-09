//In this is providing the schema or model  mongodb document

import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,  // Use uppercase "S" for String
    required: [true, "Please provide a unique username"],
    unique: [true, "Username already exists"],
  },
  
});
