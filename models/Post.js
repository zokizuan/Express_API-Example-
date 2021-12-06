const mongoose = require("mongoose");
let PostSchema = mongoose.Schema(
  /* {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true } */
  {
    id: String,
    title: String,
    description: String
}
);

let Post = mongoose.model("Post", PostSchema);

module.exports = Post;