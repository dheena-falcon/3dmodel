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

import {Login} from "../controller/userController.js";

router.post("/login", Login);


export default router;