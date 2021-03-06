import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  // filtrando e tratando o tipo de arquivo a ser enviado
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png'
    && file.mimetype !== 'image/jpeg'
    && file.mimetype !== 'image/jpg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPEG/JPG'));
    }

    return cb(null, true);
  },

  // direcionando e nomeando os arquivos a ser feito o upload
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
