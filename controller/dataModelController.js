import DataModel from "../model/DataModel.js";
import {mailRegister , sendOtp ,chpwd} from "../utils/nodeMailer.js";


export const getModels = async (req,res)=>{

  const {product_name} = req.body
  if(product_name){
    const Model = await DataModel.find({product_name});
    if(Model.length > 0){
      res.json({"product_list":Model})
    }
    else{
      res.status(400).json({message:"No Data Found"})
    }
  }else{
    res.status(400).json({message:"Please Enter Product Name"})
  }

}


export const getAllModels = async (req,res)=>{
  const Model = await DataModel.find({},{product_name:1,_id:1,product_img:1});
    if(Model.length > 0){
      res.json({"product_list":Model})
    }
    else{
      res.status(400).json({message:"No Data Found"})
    }
}

export const getModelWithId = async (req,res)=>{

  const {id} = req.body
  if(id){
    const Model = await DataModel.findById(id);
    if(Model){
      res.json({"product_list":Model})
    }
    else{
      res.status(400).json({message:"No Data Found"})
    }
  }else{
    res.status(400).json({message:"Invalid Data"})
  }

} 
