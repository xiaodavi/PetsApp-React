const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "petsapp-react",
    allowed_formats: ["jpg, png"],
    public_id: (req, file) => "computed-filename-using-request",
  },
});

const uploader = multer({ storage });

module.exports = {
  uploader: uploader,
  cloudinary: cloudinary,
};
