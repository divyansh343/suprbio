const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: "the-social-charts", 
    api_key: "179124697311444", 
    api_secret: "DwDlGhSBk7mDN4ElNfXhm8JHtVY" 
  });
  // CLOUDINARY_URL=cloudinary://179124697311444:DwDlGhSBk7mDN4ElNfXhm8JHtVY@the-social-charts
  module.exports= cloudinary;