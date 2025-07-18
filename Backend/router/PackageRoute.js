import express from 'express';
import { addPackage, listPackages, removePackage, singlePackage } from '../controller/packagecontroller.js';
import upload from '../middleware/multer.js';

const productrouter =express.Router();

productrouter.post('/add',upload.any(),addPackage)
;
productrouter.post('/remove' , removePackage);
productrouter.post('/single' , singlePackage);
productrouter.get('/list' , listPackages);

export default productrouter;



