const multer = require('multer');
const sharp = require('sharp');
const path = require('path');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp'
};

// Configure multer pour stocker le fichier en mémoire
const storage = multer.memoryStorage();

const multerConfig = multer({ storage: storage }).single('image');

// Middleware pour traiter l'image avec sharp
const processImage = (req, res, next) => {
  if (!req.file) {
    return next();
  }

  const filename = `${req.file.originalname.split(' ').join('_')}${Date.now()}.webp`;
  const outputPath = path.join(__dirname, '../images', filename);

  sharp(req.file.buffer)
    .resize(500, 500, { fit: 'inside' }) // Conserver les proportions, et s'assurer que l'image s'insère dans 500x500px
    .toFormat('webp') 
    .webp({ quality: 80 })
    .toFile(outputPath, (error, info) => {
      if (error) {
        return next(error);
      }
      req.file.filename = filename; 
      req.file.path = outputPath; 
      next();
    });
};

module.exports = { multerConfig, processImage };



  