const mongoose = require("mongoose");
// import mogoose from "mongoose"
const PostSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
    unique: true,
  },

  password: {
    type: String,
    require: true,
  },
  facebook: {
    type: String,
  },
  instagram: {
    type: String,
  },
  domain: {
    type: String,
    require: true,
  },

  gender: {
    type: String,
    require: true,
  },

  about: {
    type: String,
    require: true,
  },
  file: {
    type: String,
    require: true,
  },
});

var PostUser = mongoose.model("PostUser", PostSchema);

module.exports = { PostUser };
