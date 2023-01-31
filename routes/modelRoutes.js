import express from "express";
const router = express.Router();

// import multer from 'multer' ;
  
// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });
  
// var upload = multer({ storage: storage });

import {getModels,getAllModels,getModelWithId} from "../controller/dataModelController.js";

router.post("/searchModel", getModels);
router.post("/getModelWithId", getModelWithId);
router.get("/AllModels", getAllModels);


export default router;
