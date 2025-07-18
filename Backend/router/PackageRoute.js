import express from 'express';
import { addPackage, listPackages, removePackage, singlePackage } from '../controller/packagecontroller.js';
import upload from '../middleware/multer.js';

const productrouter =express.Router();

productrouter.post('/add',upload.fields([
  { name: 'subImage1', maxCount: 1 },
  { name: 'subImage2', maxCount: 1 },
  { name: 'subImage3', maxCount: 1 },
  { name: 'subImage4', maxCount: 1 },
  { name: 'image', maxCount: 1 } 
]),addPackage)
;
productrouter.post('/remove' , removePackage);
productrouter.post('/single' , singlePackage);
productrouter.get('/list' , listPackages);

export default productrouter;



