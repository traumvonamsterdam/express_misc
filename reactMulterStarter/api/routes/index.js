var express = require("express");
var router = express.Router();
const fs = require("fs");
const multer = require("multer");
const aws = require("aws-sdk");
const multers3 = require("multer-s3");
const upload = multer({ dest: "public/images/uploads" });
const config = require("../config");

aws.config.update(config);
const s3 = new aws.S3({});

const uploadS3 = multer({
  storage: multers3({
    s3: s3,
    acl: "public-read",
    bucket: "multer-react",
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString() + file.originalname);
    }
  })
});

router.post("/uploads3", uploadS3.single("meme"), (req, res, next) => {
  res.json("File uploaded to s3!");
  console.log(req.file);
});

router.post("/uploadFile", upload.single("meme"), (req, res, next) => {
  res.json("File uploaded");
});

router.post("/uploadFiles", upload.array("meme", 2), (req, res, next) => {
  res.json(req.files);
});

module.exports = router;
