const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    avatar: String,
    email: String,
    pets: [
      {
        type: Schema.Types.ObjectId,
        ref: "Pet",
      },
    ],
    likedPeople: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    desc: String,
    publicId: String,
  },

  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = model("User", userSchema);
